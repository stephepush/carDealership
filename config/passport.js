const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')
const validatesPassword = require('../lib/passwordUtils').validatesPassword;
//const bcrypt = require('bcryptjs')


const customFields = {
    //Changes what field attributes passport looks for
    usernameField: "email",
    //passwordField: 'pw'
    passReqToCallback: true
}

function verifyCallback(req, email, password, done) {
    console.log(req.body);
    console.log(email + " userEmail entered");
    console.log(password + " user password entered");

    User.findOne(email)
        .then((dbResponse) => {
            //console.log(dbResponse[0][0]);
            let user = dbResponse[0][0];
            if (!user) { 
                return done(null, false); 
            
            }
            //no error, but also no user 
            console.log(
                `
                here's the dbResponse Object:
                user: ${user.username},
                password: ${user.hash},   
                `
            );

            return validatesPassword(password, user.hash)
                .then((isValid) => {
                    if (isValid) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    done(err);
                })
                //const isValid = false;


        })
        .catch((err) => {
            console.log(err);
            done(err);
        });
}


const strategy = new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, verifyCallback);
console.log(strategy)
passport.use(strategy);
console.log(strategy)

passport.serializeUser((user, done) => {
    done(null, user.user_id)
});

passport.deserializeUser((userEmail, done) => {
    console.log(userEmail)
    User.findById(userEmail)
        .then((dbResponse) => {
            console.log(dbResponse[0][0])
            let user = {
                user_id: dbResponse[0][0].user_id,
                username: dbResponse[0][0].username,
                hash: dbResponse[0][0].hash,
                email: dbResponse[0][0].email
            }
            done(null, user);
        })
        .catch(err => done(err))
})

module.exports.passport = passport
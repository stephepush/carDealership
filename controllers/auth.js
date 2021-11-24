const passport = require('passport');
const { validatesPassword } = ('../lib/passwordUtils')




exports.postLogin =
    //passport takes the reigns for this route
    passport.authenticate('local',

        {
            failureRedirect: "/login-failure",
            successRedirect: "/login-success"
        }
    )


exports.getLogin = (req, res, next) => {
    //console.log(req.get('Cookie').split(';')[1]);

    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login to Express Autos',
        //isAuthenticated: req.isLoggedIn
    })
}
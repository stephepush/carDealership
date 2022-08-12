const User = require('../models/user');
const { hashPassword } = require('../lib/passwordUtils')

exports.getSignUp = (req, res, next) => {
    res.render('user/sign-up', {
        pageTitle: "Sign Up",
        //path: 'user/signup'
    })
}

exports.postSignUp = async(req, res, next) => {
    const email = req.body.email;
    const username = req.body.username;
    const hash = await hashPassword(req.body.password);
    //const isAdmin = 0;
    const person_img = req.body.person_img;
    const dob = req.body.dob;
    const newsletter = req.body.newsletter;

    const user = new User(
        null, email, username, hash, person_img, dob, newsletter
    );
    console.log(user);
    user
        .save()
        .then(() => {
            res.redirect('/login');
        })
        .catch(err => console.log(err))

}
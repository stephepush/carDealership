const User = require('../models/user');
const { hashPassword } = require('../lib/passwordUtils/')

exports.postAddUser = (req, res, next) => {
    const email = req.body.email;
    const username = req.body.username;
    const hash = hashPassword(req.body.password);
    const salt;
    const isAdmin = 0;
    const person_img = req.body.person_img;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const newsletter = req.body.gender;

    const user = new User(
        null, email, username, hash, salt, person_img, dob, gender, newsletter, isAdmin
    );
    console.log(user);
    user
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
}
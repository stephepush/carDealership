const User = require('../models/user');
const { hashPassword } = require('../lib/passwordUtils');

const { validationResult  } = require('express-validator')

exports.getSignUp = (req, res, next) => {
    res.render('user/sign-up', {
        pageTitle: "Sign Up",
        //path: 'user/signup'
    })
}

exports.postSignUp = 

    /*[
        body('email').trim().normalizeEmail(),
        body('username').notEmpty().trim().escape().isAlphanumeric(),
        body('password').isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10,}),
        body('dob').isEmpty().withMessage("Must provide a Date of Birth").isISO8601().toDate()     
    ],*/ 
    async(req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }

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
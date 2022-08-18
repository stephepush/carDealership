const Router = require('express-promise-router')

const express = require('express');

const userController = require('../controllers/user')

const { body, validationResult  } = require('express-validator')

const router = new Router()



router.get('/signup/', userController.getSignUp);

router.post(
    '/signup', 
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
        pointsForContainingSymbol: 10,
      }),
    body('dob').not().isEmpty().withMessage("Must provide a Date of Birth").toDate().isISO8601,
    userController.postSignUp);

// router.get('/edit-user/:userId', userController.editUser);

// router.post('/edit-user/', userController.editUser)

// router.get('/profile/:userId', userController.getUserProfile);


module.exports = router;
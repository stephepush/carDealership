const Router = require('express-promise-router')

const express = require('express');

const userController = require('../controllers/user')

const router = new Router()



/* router.get('/create-user/', userController.getCreateUser);

router.post('/create-user', userController.createUser);

router.get('/edit-user/:userId', userController.editUser);

router.post('/edit-user/', userController.editUser)

router.get('/profile/:userId', userController.getUserProfile);
 */

module.exports = router;
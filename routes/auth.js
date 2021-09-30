const Router = require('express-promise-router');

const express = require('express');

const authController = require('../controllers/auth');

const router = new Router()

router.get('/login', authController.getLogin);

router.post('/login', authController.postLogin)

module.exports = router;
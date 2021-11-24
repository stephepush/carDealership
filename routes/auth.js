const Router = require('express-promise-router');

const express = require('express');

const authController = require('../controllers/auth');

const router = new Router()

router.post('/login', authController.postLogin);

router.get('/login', authController.getLogin);

router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

module.exports = router;
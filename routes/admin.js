const path = require('path');

const Router = require('express-promise-router')

const express = require('express');

const adminController = require('../controllers/admin')


//const router = express.Router();
const router = new Router()


router.get('/add-car', (req, res, next) => {
    res.send()
})

router.get('/vehicles', adminController.getVehicles);

router.post('/add-car', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = router;
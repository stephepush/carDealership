const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();


router.get('/add-car', (req, res, next) => {
    res.send()
})

router.post('/add-car', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = router;
const path = require('path');

const express = require('express');

const Router = require('express-promise-router')
//const router = express.Router();

const router = new Router()

router.get('/', (req, res, next) => {
    //res.render(path.join(__dirname, '..', 'views', 'lot', 'index.ejs'), 
    res.render('./lot/index', 
    {   
        //prods: products, 
        pageTitle: 'Virtual Lot',
    })
})

module.exports = router;
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    //res.render(path.join(__dirname, '..', 'views', 'lot', 'index.ejs'), 
    res.render('./lot/index', 
    {   
        //prods: products, 
        pageTitle: 'Virtual Lot',
    })
})

module.exports = router;
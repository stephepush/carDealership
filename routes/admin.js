const express = require('express');

const Router = express.Router();


router.get('/add-car', (req, res, next) => {
    res.send()
})

router.post('/car', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = router;
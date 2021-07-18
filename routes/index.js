//const Router = require('express-promise-router')

//const db = require('../models/database')

const admin = require('./admin')
const lot = require('./lot')

module.exports = app => {
    app.use('/admin', admin)
    app.use('/lot', lot)
}
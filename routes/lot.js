//const path = require('path');

const Router = require('express-promise-router')

const express = require('express');

const lotController = require('../controllers/lot');


//const router = express.Router();
const router = new Router()

router.get('/', lotController.getVehicles);

router.get('/vehicles/:vehicleId', lotController.getVehicle);

module.exports = router;
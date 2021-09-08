const path = require('path');

const Router = require('express-promise-router')

const express = require('express');

const adminController = require('../controllers/admin')


//const router = express.Router();
const router = new Router()




//route for VIEWING ALL vehicles
router.get('/vehicles', adminController.getVehicles);

//routes for adding, editing and deleting vehicles:
router.get('/add-vehicle', adminController.getAddVehicle);

// router.post('/add-vehicle', adminController.postAddVehicle);

//router.get('/edit-vehicle/:vehicleId', adminController.getEditVehicle);

router.post('/edit-vehicle', adminController.postEditVehicle);

router.post('/delete-vehicle', adminController.postDeleteVehicle);


module.exports = router;
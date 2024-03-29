const path = require('path');

const Router = require('express-promise-router')

const express = require('express');

const adminController = require('../controllers/admin')


//const router = express.Router();
const router = new Router()






//routes for adding, editing and deleting vehicles:
router.get('/add-vehicle', adminController.getAddVehicle);

//route for VIEWING ALL vehicles
router.get('/vehicles', adminController.getVehicles);

router.post('/add-vehicle', adminController.postAddVehicle);

router.get('/edit-vehicle/:vehicleId', adminController.getEditVehicle);

router.post('/edit-vehicle', adminController.postEditVehicle);

router.post('/delete-vehicle/', adminController.postDeleteVehicle);

//route for VIEWING ALL users
router.get('/users', adminController.getUsers);
router.get('/user/:userId', adminController.getUser)
router.post('/user/userType/', adminController.updateUserType)

module.exports = router;
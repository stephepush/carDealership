const { response } = require('express');
const Car = require('../models/car');
const { makes } = require("../data/makes");
const { colors } = require('../data/colors');
const engines  = require('../data/engines.json')

/* exports.getVehicles = (req, res, next) => {
    Car.fetchAll(cars => {
        res.render('admin/vehicles', {
            cars: cars,
            pageTitle: 'Dealer Admin Page',
            path: '/admin/vehicles'
        });
    })
   
} */

/* exports.getVehicles = (req, res, next) => {
    Car.fetchAll()
        .then((rows) => {
            console.log(rows[0]);
            
            res.render('admin/vehicles', {
                cars: rows[0],
                pageTitle: 'Dealer Admin Page',
                path: '/admin/vehicles',
                
            }); 
            
        })
        .catch(err => console.log(err));
} */

exports.getVehicles = (req, res, next) => {
    Car.fetchAll()
        .then((rows) => {
            console.log(rows[0]);
            
            res.render('admin/vehicles', {
                cars: rows[0],
                pageTitle: 'Dealer Admin Page',
                path: '/admin/vehicles',
                
            }); 
            
        })
        .catch(err => console.log(err));
}

exports.getAddVehicle = (req, res, next) => {
    res.render('admin/edit-vehicle', {
        pageTitle: 'Add Vehicle',
        path: '/admin/add-vehicle',
        editing: false, //used by edit-vehicle template to determine its use
        makesArray: makes,
        colorsArray: colors,
        enginesData: engines,
        
    })
}

exports.postAddVehicle = (req, res, next) => {
    const model_year = req.body.model_year;
    const make = req.body.make;
    const model = req.body.model;
    const color = req.body.color;
    const miles = req.body.miles;
    const transmission = req.body.transmission;
    const layout = req.body.layout;
    const engine_config = req.body.engine_config;
    const car_photo_url = null;
    const car_price = null;
    const car = new Car(
        null, model_year, make, model, 
        color, miles, transmission, layout, engine_config
        )
        console.log(car)
/*     car
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err)) */
}

exports.getEditVehicle = (req, res, next) =>{
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const carId = req.params.carId
    Car.findById(carId, car =>{
            res.render('admin/edit-vehicle', {
            pageTitle: 'Edit Vehicle',
            path: '/admin/edit-vehicle',
            editing: editMode,
            car: car
        })
    })

}

exports.postEditVehicle = (req, res, next) => {}

exports.postDeleteVehicle = (req, res, next) => {}
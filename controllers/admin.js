const { response } = require('express');
const Car = require('../models/car');
const { makes } = require("../data/makes");
const { colors } = require('../data/colors');
const { sale_status, salesStatus } = require('../data/saleStatus')
const engines  = require('../data/engines.json');


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

exports.getVehicle = (req, res, next) => {
    const carId = req.params.vehicleId;
    Car.findById(carId)
        .then(([carId]) => {
            res.render('lot/vehicle-detail', {
                vehicle: car[0],
                //pageTitle: `Express Autos: ${car.model_year} + ${car.make} ${car.model}`,
                path: 'lot/vehicle-detail'
            })
        })
}

exports.getAddVehicle = (req, res, next) => {
    res.render('admin/edit-vehicle', {
        pageTitle: 'Add Vehicle',
        path: '/admin/add-vehicle',
        editing: false, //used by edit-vehicle template to determine its use
        makesArray: makes,
        colorsArray: colors,
        sale_status: salesStatus,
        enginesData: engines
        
    })
}

exports.postAddVehicle = (req, res, next) => {
    //const id = null;
    //car table
    const model_year = req.body.model_year;
    const make = req.body.make;
    const model = req.body.model;
    const miles = req.body.miles;
    const color = req.body.color;
    const transmission = req.body.transmission;
    const layout = req.body.layout;
    const engine_type = req.body.engine_config;
    //photo table
    const car_photo_url = req.body.car_photo_url;
    //car_price table
    const car_price = req.body.car_price;
    //car sales_status table
    const sale_status = req.body.sale_status;
    const for_sale = req.body.for_sale;
    //const for_sale = parseInt(req.body.for_sale);
    //const for_sale = Boolean(parseInt(req.body.for_sale));
    const car = new Car(
        null, model_year, make, model, 
        miles, color, transmission, layout, engine_type,
        car_photo_url, car_price, sale_status, for_sale);
        console.log(car);
    car
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
}

exports.getEditVehicle = (req, res, next) =>{
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const carId = req.params.vehicleId
    //console.log(carId)
    Car.findById(carId)
        .then(car =>{
            if (!car) {
                return res.redirect('/');
            }
            console.log(car[0][0])
            res.render('admin/edit-vehicle', {
                pageTitle: 'Edit Vehicle',
                path: '/admin/edit-vehicle',
                editing: editMode,
                makesArray: makes,
                colorsArray: colors,
                sale_status: salesStatus,
                enginesData: engines,
                car: car[0][0]
            })
        })
        .catch(err => console.log(err))

}

exports.postEditVehicle = (req, res, next) => {}

exports.postDeleteVehicle = (req, res, next) => {}
const Car = require('../models/car');

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

exports.postAddVehicle = (req, res, next) => {
    const model_year = req.body.title;
    const make = req.body.model_year;
    const model = req.body.model;
    const color = req.body.color;
    const miles = req.body.miles;
    const transmission = req.body.transmission;
    const layout = req.body.layout;
    const engine_config = req.body.engine_config;
    const car = new Car(
        null, model_year, make, model, 
        color, miles, transmission, layout, engine_config
        )
    car
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
}

exports.getEditVehicle = (req, res, next) =>{}

exports.postEditVehicle = (req, res, next) => {}

exports.postDeleteVehicle = (req, res, next) => {}
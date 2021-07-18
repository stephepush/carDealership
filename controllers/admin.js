const Car = require('../models/car');

exports.getVehicles = (req, res, next) => {
    Car.fetchAll(cars => {
        res.render('admin/vehicles', {
            cars: cars,
            pageTitle: 'Dealer Admin Page',
            path: '/admin/vehicles'
        });
    })
   
}
const Car = require ('../models/car');

exports.getVehicles = (req, res, next) => {
    res.render('admin/vehicles', {
        cars: cars,
        pageTitle: 'Dealer Admin Page',
        path: '/admin/vehicles'
    });
}
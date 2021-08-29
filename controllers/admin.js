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

exports.getVehicles = (req, res, next) => {
        try{
            let rows = Car.fetchAll();
            console.log(rows)    
            return rows;
            } catch(e) {
            console.log(e)
        }


        res.render('admin/vehicles', {
            cars: rows,
            pageTitle: 'Dealer Admin Page',
            path: '/admin/vehicles'
        });
} 
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
    Car.fetchAll()
        .then((rows) => {
            console.log(rows[0]);
            
            res.render('admin/vehicles', {
                cars: rows,
                pageTitle: 'Dealer Admin Page',
                path: '/admin/vehicles',
                
            }); 
            
        })
        .catch(err => console.log(err));
}
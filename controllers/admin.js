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
/*         try{
            let rows = Car.fetchAll();
            console.log(rows)    
            return rows;
            } catch(e) {
            console.log(e)
        } */
      
        let rows  = 
        Car.fetchAll()
        .then(data => res.status(200))
        .then(data => console.log(data))
        .catch(err => res.status(400))


        res.render('admin/vehicles', {
            cars: rows,
            pageTitle: 'Dealer Admin Page',
            path: '/admin/vehicles'
        });
} 
const Car = require('../models/car');


exports.getVehicles = (req, res, next) => {
    Car.fetchAll()
        .then((rows) => {
            console.log(rows[0]);
            /*could reuse 'admin/vehicles' for lot/index later I guess. Potential todo */
            res.render('lot/index', {
                cars: rows[0],
                path: '/',
                pageTitle: 'Welcome to Express Autos!',
                pageName: 'Express Autos Home'
            });

        })
        .catch(err => console.log(err));
}
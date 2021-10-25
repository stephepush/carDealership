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

exports.getVehicle = (req, res, next) => {
    //const carId = req.params.vehicleId
    const carId = req.params.vehicleId;
    console.log(carId)
    Car.findById(carId)
        .then(car => {
            if (!car) {
                return res.redirect('/')
            }
            console.log(car[0][0])
            res.render('lot/vehicle-detail', {
                car: car[0][0],
                pageTitle: 'View Vehicle'
            })
        })
        .catch(err => console.log(err))
}

/* exports.getVehicle = (req, res, next) => {
    //const carId = req.params.vehicleId;
    const carId = 52;
    console.log(carId)
    Car.findById(carId)
        .then(([carId]) => {
            res.render('lot/vehicle-detail', {
                vehicle: car[0],
                //pageTitle: `Express Autos: ${car.model_year} + ${car.make} ${car.model}`,
                path: 'lot/vehicle-detail',

            })
        })
        .catch(err => console.log(err))
} */
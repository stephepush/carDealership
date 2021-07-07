import db from './database';

module.exports = class Car {
    constructor( 
        id, model_year, make, model, miles,
        color, transmission, layout, engine_config, car_photo_url, car_price ) {
            this.id = id;
            this.model_year = model_year;
            this.make = make;
            this.model = model;
            this.miles = miles;
            this.color = color;
            this.transmission = transmission;
            this.layout = layout;
            this.engine_config = engine_config;
            this.car_photo_url = car_photo_url;
            this.car_price = car_price
        }

        static deleteById(id) {}

        
        static fetchAll() {
            return db.execute('SELECT * FROM cars')
        }

        static findById(id) {
            return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
        }
}
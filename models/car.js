const { query, pool } = require('./database');
//import pool from './database';

//change name to Vehicle in a later commit
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

        save() {
            client.query('BEGIN', err => {

            })
        }

        static deleteById(id) {}


        static async fetchAll() {
            try{
                const rows= await query('SELECT * FROM cars')
                //return rows
            }
            catch(e) {
                console.log('Catch an error: ', e)
            }
            //await pool.end()

        }

        static findById(id) {
            //return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
        }
}
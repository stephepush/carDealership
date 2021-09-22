//const Connection = require('mysql2/typings/mysql/lib/Connection');
const  db = require('./database');
//import { conn } from './database';


module.exports = class Car {
    constructor( 
        id, model_year, make, model, miles,
        color, transmission, layout, engine_type, car_photo_url, car_price, sale_status, for_sale ) {
            this.id = id;
            this.model_year = model_year;
            this.make = make;
            this.model = model;
            this.miles = miles;
            this.color = color;
            this.transmission = transmission;
            this.layout = layout;
            this.engine_type = engine_type;
            this.car_photo_url = car_photo_url;
            this.car_price = car_price;
            this.sale_status = sale_status;
            this.for_sale = for_sale;
        }


        static fetchAll () {
            const options = {
                sql: 
                "SELECT c.car_id, c.model_year, c.make,c.model, c.miles, c.color, c.transmission, c.layout, c.engine_type, p.car_id, p.car_photo_url FROM cars c INNER JOIN car_photos p ON c.car_id = p.car_id", 
                nestTables: true
            };
            return db.query(options)
        }

/*         static findById(id) {
            return db.execute('SELECT * FROM cars WHERE car_id = ?', [id]);
        } */

        static findById(id) {
            let options = 
                    
                        `SELECT 
                            c.car_id, c.model_year, c.make, c.model, 
                            c.miles, c.color, c.transmission, c.layout, 
                            c.engine_type, p.car_id, p.car_photo_url,
                            d.car_id, d.car_price, s.sale_status, s.for_sale

                        FROM cars c
                            INNER JOIN car_photos p ON c.car_id = p.car_id
                            INNER JOIN car_prices d ON c.car_id = d.car_id
                            INNER JOIN sales_status s ON c.car_id = s.car_id
                        WHERE c.car_id = ?`;
                    
                
                return db.query(options, id, {nestTables: true})
        }

        save() {
            let pk;
            
            return db.getConnection()
            
                .then((db) => {
                    return db.query('START TRANSACTION');                    
                })
                .then(() => {
                    const car_insert = db.query('INSERT INTO cars (model_year, make, model, color, miles, transmission, layout, engine_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [this.model_year, this.make, this.model, this.color, this.miles, this.transmission, this.layout, this.engine_type]);
                    return car_insert;
                })
                 .then((car_insert) => {
                    console.log(Object.entries(car_insert));
                    console.log(car_insert[0]);
                    console.log(car_insert[0]['insertId'])
                    pk = car_insert[0]['insertId']
                }) 
                /*.then(() => console.log(pk)) */
                .then(() => {
                    //console.log(pk)
                    db.query('INSERT INTO car_photos (car_id, car_photo_url) VALUES (?,?)',
                    [pk, this.car_photo_url])
                })
                .then(() => {db.query('INSERT INTO car_prices (car_id, car_price) VALUES (?, ?)', [pk, this.car_price])
                })
                .then(() => {db.query('INSERT INTO sales_status (car_id, sale_status, for_sale) VALUES (?, ?, ?)', [pk, this.sale_status, this.for_sale])
                })
                .then(() => {
                    return db.query('COMMIT');
                })
                .catch((error) => {
                    return db.query('ROLLBACK');
                })
        }

        static deleteById(id) {}
}
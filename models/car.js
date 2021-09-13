const  db = require('./database');
//import { conn } from './database';


//connection.end(); */

/* conn
  .query("SELECT NOW()")
  .then(rows => {
	console.log(rows); //[ { 'NOW()': 2018-07-02T17:06:38.000Z }, meta: [ ... ] ]
  })
  .catch(err => {
	//handle error
  });
 */
//const pool = new Pool;
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


        static create(id, model_year, make, model, miles,
            color, transmission, layout, engine_config, car_photo_url, car_price) {
                db.tx(async t => {
                    await t.none('INSERT INTO cars(model_year, make, model, miles, color, transmission, layout, engine_config) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [/*input from forms*/]);
                    await t.none('INSERT INTO car_photos(car_photo_url) VALUES($1)', [/*Input from forms */]);
                })
                .then(() => {
                    console.log("success!")
                })
                .catch(error => {
                    console.log('ERROR:', error);
                })
        }

/*         
        static fetchAll () {
            return db.query('SELECT * FROM cars ')
        } */

        static fetchAll () {
            var options = {
                sql: 
                "SELECT c.car_id, c.model_year, c.make,c.model, c.miles, c.color, c.transmission, c.layout, c.engine_type, p.car_id, p.car_photo_url FROM cars c INNER JOIN car_photos p ON c.car_id = p.car_id", 
                nestTables: true
            };
            return db.query(options)
        }

        static findById(id) {
            return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
        }

        save() {

            //console.log(car)
/*             return db.execute(
                'INSERT INTO cars (model_year, make, model, color, miles, transmission, layout, engine_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [this.model_year, 
                    this.make, 
                    this.model, 
                    this.color,
                    this.miles,
                    this.transmission,
                    this.layout,
                    this.engine_type]
            ) */
        }

        static deleteById(id) {}

        
        
/*         static fetchAll = async () => {
            //const pool = new Pool;
            
            console.log('starting async query')
            const result = await selectQuery('SELECT * FROM cars')
            console.log(result)
            console.log('async query finished')
            return result


            console.log('calling end')
            //await pool.end()
            console.log('pool has drained')
          } */
        

        /* static async fetchAll () {
        
            console.log('Displaying')
            try {
                let results= await paramlessQuery('SELECT * FROM cars');
                console.log(results)
                console.log('end');
                results.status(200).json(results)
                //return results
            } catch (err) {
                console.log(err)
                return err
            }
            
            //console.log(results.rows)
            //return results
            
        } */

/*         static fetchAll = async()=> {
            return new Promise(async function(resolve, reject){
                try {
                    let results = await query('SELECT * FROM cars');
                    console.log(results)
                    return resolve(results);
                } catch (err) {
                    console.log(err)
                    return reject(err);
                }

                console.log(results.rows)
               //return results
            })
            
            
        } */

/*      static findById(id) {
            //return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
        } */
}
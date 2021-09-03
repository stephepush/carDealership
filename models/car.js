const  {conn}  = require('./database');
//import conn from './database';


conn
.then(conn => {conn.query('SELECT CURRENT_USER()')
    .then(rows => {
        console.log(rows)
        conn.end
    })
    .catch(error => {
        console.log('there seems to be an error: ' + error.stack)
    })
});
//connection.end();

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


        save() {
            client.query('BEGIN', err => {

            })
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

        static fetchAll = async()=> {
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
            
            
        }

/*         static findById(id) {
            //return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
        } */
}
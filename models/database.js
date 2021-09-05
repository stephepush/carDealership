
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', 
  user: 'admin', 
  password: 'hello',
  database: 'express_autos'

})
/* 
pool.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
}); */
/* .then(conn => {
  conn.query("select 1", [2])
    .then(rows => {
      console.log(rows); // [{ "1": 1 }]
      conn.end();
    })
    .catch(err => { 
      //handle query error
      console.log('hello')
    });
})
.catch(err => {
  //handle connection error
  console.log('there seems to be an error: ' + err.stack)
}); 
 */

/* let config = {
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'admin',
  password : 'hello',
  database : 'express-autos'
}; */

/* let connection = mysql.createConnection(config)*/

//pool.connect()
module.exports = pool.promise();
  //connection : mariadb.createConnection(config) 

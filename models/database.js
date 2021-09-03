
const mariadb = require('mariadb');

const conn = mariadb.createConnection({
  host: 'localhost', 
  user: 'admin', 
  password: 'hello',
  database: 'express_autos'
})
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
}); */


/* let config = {
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'admin',
  password : 'hello',
  database : 'express-autos'
}; */

/* let connection = mysql.createConnection(config)
connection.connect(function(err){
  if (err){
    console.log('error connection: ' + err.stack);
  }
  console.log(`connected successfully to your mariadb database`)
}) */

module.exports =  { 
  //connection : mariadb.createConnection(config) 
  conn: conn
};
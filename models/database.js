
let mysql = require('mysql');


let config = {
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'admin',
  password : 'hello',
  database : 'express-autos'
};

/* let connection = mysql.createConnection(config)
connection.connect(function(err){
  if (err){
    console.log('error connection: ' + err.stack);
  }
  console.log(`connected successfully to your mariadb database`)
}) */

module.exports =  { 
  connection : mysql.createConnection(config) 
};

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', 
  user: 'admin', 
  password: 'hello',
  database: 'express_autos',
  //multipleStatements: true
})

module.exports = pool.promise();


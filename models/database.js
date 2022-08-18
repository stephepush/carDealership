const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'dbeaver_user',
    password: 'password',
    database: 'express_autos',
    //multipleStatements: true
})

module.exports = pool.promise();
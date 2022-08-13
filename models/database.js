const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'dbeaver_user',
    password: 'password',
    database: 'express_autos_demo',
    //multipleStatements: true
})

module.exports = pool.promise();
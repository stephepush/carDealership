
//const Promise = require('bluebird')

const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express-autos-test',
    password: 'hello',
    port: 5432,
  })


  module.exports = {

    query: (text, params) => pool.query(text, params),
    selectQuery: (query) => pool.query(query),
    paramlessQuery: (text) => pool.query(text)

  };
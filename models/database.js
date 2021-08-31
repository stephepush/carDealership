
const promise = require('bluebird');

const options = {
  promiseLib: promise,
  query: e => {
    console.log(e.query);
  }
}


/* 
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express-autos-test',
    password: 'hello',
    port: 5432,
  })

 */

  const pgp = require('pg-promise')(options)

  const connectionString = {
    host: 'localhost',
    port: 5432,
    database: 'express-autos-test',
    user: 'postgres',
    password: 'hello',
    max: 30
  }

  const db = pgp(connectionString)
  module.exports = db;
  
  /* {

    query: (text, params) => pool.query(text, params),
    selectQuery: (query) => pool.query(query),
    paramlessQuery: (text) => pool.query(text)

  }; */
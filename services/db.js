const mysql = require('mysql2/promise');
const config = require('../config/config');
/*Palabra reservada async significa que
 la funcion es asincronica, es decir esta se ejecuta posterior a la llamada 
 y puede durar un tiempo determinado*/
async function query(sql, params) {
    /*Palabra reservada await es la forma de 
    poner en espera un resultado o retorno de asincronico*/
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql);
  
    return results;
  }
  
  module.exports = {
    query
  }
  
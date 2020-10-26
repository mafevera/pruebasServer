'use strict'

const config = require('./../config');
// const { Pool } = require('pg');

// const conexion = new Pool({
//    user: config.dbUser,
//    host: config.dbHost,
//    database: config.dbName,
//    password: config.dbPassword,
//    port: config.dbPort
// });

// module.exports = conexion;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
   host: config.dbHost,
   dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
   port: config.dbPort,
   logging: false // para no mostrar por consola las sentencias SQL ejecutadas.
});

module.exports = sequelize;
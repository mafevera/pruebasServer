'use strict'

// cargar variables globales
require('./config');

// express
const express = require('express');
const bodyParser = require('body-parser');
var servidor = express();
const async = require('async');

// const rutasWeb = require('./rutas/web');
// const rutasApi = require('./rutas/api');
servidor.use( express.static('./public'))
// middlewares
servidor.use(bodyParser.urlencoded({extended: true}));
servidor.use(bodyParser.json());

// cors
// servidor.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

//    next();
// });


// cargar rutas
servidor.use(require('./routes'));



servidor.listen(process.env.PORT, () => {
   console.log('Escuchando por el puerto: ', process.env.PORT);
});


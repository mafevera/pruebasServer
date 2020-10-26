'use strict'
const bodyParser = require('body-parser');
const express = require('express');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const controlador1 = require('./controladores/controllerFormularioLegalizacion');
const controlador2 = require('./controladores/controllerProgramaAcademico');
const controlador3 = require('./controladores/controllerSuma');

//semaphore.js 
//https://www.npmjs.com/package/semaphore
//Limita el acceso simultaneo a un recurso
//ejemplo:
// Limit concurrent db access
// var sem = require('semaphore')(1);
// var server = require('http').createServer(req, res) {
//     sem.take(function() {
//         expensive_database_operation(function(err, res) {
//             sem.leave();
 
//             if (err) return res.end("Error");
 
//             return res.end(res);
//         });
//     });
// });
var sem = require('semaphore')(1);
var sem2 = require('semaphore')(1);



var api = express.Router();
api.post('/FormularioLegalizacion', urlencodedParser,
    (req, res) => {
        sem.take(async function () {
            await controlador1(req, res);

            setTimeout(() => {
                console.log('Primer TimeOut');
                sem.leave();
            }, 10000);
        });
    }
);

api.post('/ProgramaAcademico', urlencodedParser,
    (req, res) => {

        sem.take(async function () {

            await controlador2(req, res);
            setTimeout(() => {
                console.log('second TimeOut');
                sem.leave();
            }, 10000);
        });
    }
);

api.post('/Suma', urlencodedParser,
    (req, res) => {

        sem2.take(async function () {

            await controlador3(req, res);
            setTimeout(() => {
                console.log('third TimeOut');
                sem2.leave();
            }, 3000);
        });
    }
);
// api.post('/ProgramaAcademico2',urlencodedParser,require('./controladores/controllerProgramaAcademico'));





module.exports = api;
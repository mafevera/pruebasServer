'use strict'
const bodyParser = require('body-parser');
const express = require('express');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
const controlador1 = require('./controladores/controllerFormularioLegalizacion');
const controlador2 = require('./controladores/controllerProgramaAcademico');
const controlador3 = require('./controladores/controllerSuma');

const {default: PQueue} = require('p-queue');
const queue = new PQueue({concurrency: 1});
const queue2 = new PQueue({concurrency: 1});
const delay = require('delay');

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
(req, res) => {queue.add( async()=> {
    await controlador1(req, res);
    await delay(10000).then(() => {
        console.log(`8. Pending promises: ${queue.pending}`);

})
})})

api.post('/ProgramaAcademico', urlencodedParser,
    (req, res) => queue.add( async()=>{ 
        await controlador2(req, res);
        await delay(10000).then(() => {
            console.log(`8. Pending promises: ${queue.pending}`);
    
    })
    }));

api.post('/Suma', urlencodedParser,
    (req, res) => queue2.add(async()=> {
    await controlador3(req, res);
    await delay(10000).then(() => {
        console.log(`8. suma: ${queue.pending}`);})
} ) );
// api.post('/ProgramaAcademico2',urlencodedParser,require('./controladores/controllerProgramaAcademico'));





module.exports = api;
'use strict'
const bodyParser = require('body-parser');
const express = require('express');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const controlador1=require('./controladores/controllerFormularioLegalizacion');
const controlador2=require('./controladores/controllerProgramaAcademico');
const controlador3=require('./controladores/controllerSuma');
var sem = require('semaphore')(1);
var sem2 = require('semaphore')(1);



var api = express.Router();
api.post('/FormularioLegalizacion', urlencodedParser,
(req,res)=>{
    console.log('primero');
    sem.take(async function() {
       await controlador1(req,res);
    
    setTimeout(() => {

        sem.leave();


            console.log('Primer TimeOut');
            
        }, 10000);
    });
}
);
 
api.post('/ProgramaAcademico',urlencodedParser, 
(req,res)=>{
    console.log('segundo');

    sem.take(async function() {
   
await controlador2(req,res );
    setTimeout(() => {
        sem.leave();


            console.log('second TimeOut');
            
        }, 10000);
    });
}
);

api.post('/Suma',urlencodedParser, 
(req,res)=>{
    console.log('Tercero');

    sem2.take(async function() {
   
await controlador3(req,res );
    setTimeout(() => {
        sem2.leave();


            console.log('third TimeOut');
            
        }, 3000);
    });
}
);
// api.post('/ProgramaAcademico2',urlencodedParser,require('./controladores/controllerProgramaAcademico'));





module.exports = api;
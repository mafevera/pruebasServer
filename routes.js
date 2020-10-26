'use strict'
const bodyParser = require('body-parser');
const express = require('express');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// var sem = require('semaphore')(1);



var api = express.Router();
api.post('/FormularioLegalizacion', urlencodedParser,
// ()=>{
    // sem.take(async function() {

    require('./controladores/controllerFormularioLegalizacion')
    // sem.leave()
    // });
// }
);
 
api.post('/ProgramaAcademico',urlencodedParser, require('./controladores/controllerProgramaAcademico')


);
// api.post('/ProgramaAcademico2',urlencodedParser,require('./controladores/controllerProgramaAcademico'));





module.exports = api;
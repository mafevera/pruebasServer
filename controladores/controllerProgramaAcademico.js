'use strict'
const {
    ProgramaAcademico
} = require('./../modelos/db');
const db = require('./../modelos/conexionDB');
// const {default: PQueue} = require('p-queue');
// const queue = new PQueue({concurrency: 1});
var sem = require('semaphore')(1);
// 


 async function controlador(req, res) {
    sem.take(async function() {
       
        let body = req.body.numero;
    
        // console.log('Holaaaaaaaaa');
        console.log(body);
       
            const[resultado, metadata]= await db.query(`UPDATE programa_academico SET codigo_unidad = ${body} WHERE codigo=70`);
       
        
            const[prog, metadata1]= await db.query(`SELECT * FROM programa_academico WHERE codigo=70`);
    
            setTimeout(() => {
            sem.leave();


                console.log('Primer TimeOut');
                
            }, 10000);
            
      
        
        if (metadata.rowCount===0) {
            return res.status(400).json({
                status: 400,
                mensaje: 'No hay registros'
            });
            
        } else {
        
        return res.status(200).json({
                status: 200,
                mensaje: 'Todo bien',
                body: {
                    registros: prog
                }
            });
            // console.log(resultado);
    
        }
        });

}

module.exports = controlador;
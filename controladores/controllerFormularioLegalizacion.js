'use strict'

const {ProgramaAcademico, SemestreAcademico} = require('./../modelos/db');
// const db = require('./../modelos/conexionDB');
// var sem = require('semaphore')(1);
const delay = require('delay');

async function controlador(req, res){
   // sem.take(async function() {
   let body = req.body;
   delay(10000)

   // --------------- verificamos la accion --------------- \\
   try {
      switch ((body.accion) ? body.accion :null) {
         case 'buscar':
            // --------------- validamos los campos del req --------------- \\
            
            // validamos el codigo
            let val1 = parseInt(body.codigo,10) ? true : false
            // validamos el semestre
            let val2 = parseInt(body.semestre,10)
               ?  await SemestreAcademico.findAll({
                     where: {
                        id: body.semestre
                     }
                  })
               : false;
            // console.log(val2.length);
            console.log(body);
            if(!(val1 && val2 && val2.length != 0)){
               return res.status(400).json({
                  status: 400,
                  mensage: 'error en los parametros del body'
               });
            }
            
            // --------------- desarrollamos la peticion --------------- \\
            var resultado = await ProgramaAcademico.findAll({
               attributes: ['codigo','nombre','codigo_unidad','codigo_modalidad','id_plan_estudio_activo']
            });

            // const [resultado, metadata] = await db.query('SELECT * FROM programa_academico');
            // setTimeout(() => {
            //    sem.leave();
   
   
            //        console.log('second TimeOut');
                   
            //    }, 3000);
            if(!resultado){
               return res.status(400).json({
                  status: 400,
                  mensaje: 'No hay registros'
               });
            }else{
               return res.status(200).json({
                  status: 200,
                  mensaje: 'Todo bien',
                  body: {
                     registros: resultado 
                  }
               });
            }
         break;
         default:
            return res.status(400).json({
               status: 400,
               mensage: 'accion no reconocida, revise la petición.'
            });
         break;
      }
   } catch (error) {
      console.log(error);
      return res.status(500).json({
         status: 500,
         mensage: 'pailas',
         'error': error.message
   });
    }
   //  })
   


   // console.log('este');
   // let respuesta1 = await Prueba.getInfo('legalizacion_matricula');
   // console.log(respuesta1);
   // if(!respuesta1.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});
   // let respuesta2 = await Prueba.getInfo('legalizacion_matricula');
   // console.log('este3');
   // if(!respuesta2.estado) return res.status(400).json({mensaje:respuesta1.mensaje, error: respuesta1.error});

   // console.log('este4');

   // res.status(200).json({
   //    resultado: respuesta2
   // });

   }

module.exports = controlador;
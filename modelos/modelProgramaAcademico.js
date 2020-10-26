'use strict'



module.exports = (sequelize, type) => {
   return sequelize.define(
      'programa_academico',
      {},
      {
         tableName: 'programa_academico',
         timestamps: false
      }
   );
}


// --------------------------------------------------

// const conexion = require('./../database/conexionDB');
// const { Sequelize, DataTypes } = require('sequelize');

// const ProgramaAcademico = db.define('programa_academico',
//    {
//       codigo:{
//          type: DataTypes.INTEGER
//       },
//       nombre:{
//          type: DataTypes.STRING
//       },
//       codigo_unidad:{
//          type: DataTypes.INTEGER
//       },
//       codigo_modalidad:{
//          type: DataTypes.INTEGER
//       },
//       id_plan_estudio_activo:{
//          type: DataTypes.INTEGER
//       }
//    },
//    {
//       tableName: 'programa_academico'
//    }
// );

// module.exports = db.models.programa_academico;

// ----------------------------------------------

// async function getInfo(tabla){

//    try {
//       let resultado = await db.query('select * from ' + tabla);
//       return {
//          estado: true,
//          respuesta: resultado.rows
//       };
//    } catch (error) {
//       // console.log(error);
//       return {
//          estado: false,
//          error: error,
//          mensaje: error.message
//       };
//    }
   
//    // await db.query('select * from ' + tabla)
//    //    .then(res => {
//    //       return {
//    //                   estado: true,
//    //                   respuesta: res.rows
//    //                };
//    //    })
//    //    .catch(err => {
//    //       return {
//    //                   estado: false,
//    //                   error: err,
//    //                   mensaje: err.message
//    //                };
//    //    })

//    // db.query('select * from ' + tabla, (err, res) => {
//    //    if(err){
//    //       return {
//    //          estado: false,
//    //          error: err,
//    //          mensaje: err.message
//    //       };
//    //    }

//    //    if(res){
//    //       return {
//    //          estado: true,
//    //          respuesta: res.rows
//    //       };
//    //    }else{
//    //       return {
//    //          estado: false,
//    //          error: 'paila',
//    //          mensaje: 'no hay error pero no hay error'
//    //       };
//    //    }
//    // });

   
// }

// module.exports = {
//    getInfo
// }
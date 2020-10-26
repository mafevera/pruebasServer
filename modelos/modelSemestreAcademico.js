'use strict'

module.exports = (sequelize, type) => {
  return sequelize.define(
    'semestre_academico',
    {},
    {
      tableName: 'semestre_academico', 
      timestamps: false
    }
  );
}
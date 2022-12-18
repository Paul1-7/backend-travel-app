const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarProgramaciones() {
  return await models.Programacion.findAll()
}

async function BuscarProgramacion(id) {
  return await models.Programacion.findByPk(id)
}

async function AgregarProgramaciones(programaciones) {
  return await models.Programacion.bulkCreate(programaciones)
}

module.exports = {
  ListarProgramaciones,
  BuscarProgramacion,
  AgregarProgramaciones
}

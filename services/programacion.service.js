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

async function EliminarProgramacionesPorIdRuta(id) {
  return await models.Programacion.destroy({
    where: {
      idRuta: id
    }
  })
}

module.exports = {
  ListarProgramaciones,
  BuscarProgramacion,
  AgregarProgramaciones,
  EliminarProgramacionesPorIdRuta
}

const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarPuntos() {
  return await models.Puntos.findAll({
    include: ['Lugar']
  })
}

async function BuscarPuntos(id) {
  return await models.Puntos.findByPk(id)
}

async function AgregarPuntos(punto) {
  return await models.Puntos.create(punto)
}

async function ModificarPuntos(id, cambio) {
  const user = await models.Puntos.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarPuntos(id) {
  const user = await models.Puntos.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarPuntos,
  BuscarPuntos,
  AgregarPuntos,
  ModificarPuntos,
  EliminarPuntos
}

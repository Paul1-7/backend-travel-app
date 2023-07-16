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

async function ModificarPuntosPorIdLugar(idLugar, data, options = {}) {
  const result = await models.Puntos.update(data, {
    where: { idLugar },
    ...options
  })

  return result[0] > 0
}

async function EliminarPuntos(id) {
  const user = await models.Puntos.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarPuntos,
  BuscarPuntos,
  AgregarPuntos,
  ModificarPuntosPorIdLugar,
  EliminarPuntos
}

const { models } = require('../libs/sequelize.js')

async function ListarPropuestas() {
  return await models.Propuestas.findAll()
}

async function BuscarPropuestas(id) {
  return await models.Propuestas.findByPk(id)
}

async function AgregarPropuestas(propuesta) {
  return await models.Propuestas.create(propuesta)
}

async function ModificarPropuestas(id, cambio) {
  const user = await models.Propuestas.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarPropuestas(id) {
  const user = await models.Propuestas.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarPropuestas,
  BuscarPropuestas,
  AgregarPropuestas,
  ModificarPropuestas,
  EliminarPropuestas
}

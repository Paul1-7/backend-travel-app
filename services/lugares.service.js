const { models } = require('../libs/sequelize.js')

async function ListarLugares() {
  return await models.Lugares.findAll({ include: 'punto' })
}

async function BuscarLugares(id) {
  return await models.Lugares.findByPk(id)
}

async function AgregarLugares(lugar) {
  return await models.Lugares.create(lugar)
}

async function ModificarLugares(id, cambio) {
  const user = await models.Lugares.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarLugares(id) {
  const user = await models.Lugares.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarLugares,
  BuscarLugares,
  AgregarLugares,
  ModificarLugares,
  EliminarLugares
}

const { models } = require('../libs/sequelize.js')

async function ListarInfo() {
  return await models.Info_agencia.findAll()
}

async function BuscarInfo(id) {
  return await models.Info_agencia.findByPk(id)
}

async function AgregarInfo(info) {
  return await models.Info_agencia.create(info)
}

async function ModificarInfo(id, cambio) {
  const user = await models.Info_agencia.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarInfo(id) {
  const user = await models.Info_agencia.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarInfo,
  BuscarInfo,
  AgregarInfo,
  ModificarInfo,
  EliminarInfo
}

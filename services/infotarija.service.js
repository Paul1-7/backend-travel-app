const { models } = require('../libs/sequelize.js')

async function ListarInfo() {
  return await models.Info_tarija.findAll()
}

async function BuscarInfo(id) {
  return await models.Info_tarija.findByPk(id)
}

async function AgregarInfo(infor) {
  return await models.Info_tarija.create(infor)
}

async function ModificarInfo(id, cambio) {
  const user = await models.Info_tarija.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarInfo(id) {
  const user = await models.Info_tarija.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarInfo,
  BuscarInfo,
  AgregarInfo,
  ModificarInfo,
  EliminarInfo
}

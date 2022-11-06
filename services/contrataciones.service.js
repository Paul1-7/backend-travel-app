const { models } = require('../libs/sequelize.js')

async function ListarContrataciones() {
  return await models.Contrataciones.findAll()
}

async function BuscarContrataciones(id) {
  return await models.Contrataciones.findByPk(id)
}

async function AgregarContrataciones(contratacion) {
  return await models.Contrataciones.create(contratacion)
}

async function ModificarContrataciones(id, cambio) {
  const user = await models.Contrataciones.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarContrataciones(id) {
  const user = await models.Contrataciones.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarContrataciones,
  BuscarContrataciones,
  AgregarContrataciones,
  ModificarContrataciones,
  EliminarContrataciones
}

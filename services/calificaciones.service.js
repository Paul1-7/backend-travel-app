const { models } = require('../libs/sequelize.js')

async function ListarCalificaciones() {
  return await models.Calificaciones.findAll()
}

async function BuscarCalificaciones(id) {
  return await models.Calificaciones.findByPk(id)
}

async function AgregarCalificaciones(calificacion) {
  return await models.Calificaciones.create(calificacion)
}

async function ModificarCalificaciones(id, cambio) {
  const user = await models.Calificaciones.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarCalificaciones(id) {
  const user = await models.Calificaciones.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarCalificaciones,
  BuscarCalificaciones,
  AgregarCalificaciones,
  ModificarCalificaciones,
  EliminarCalificaciones
}

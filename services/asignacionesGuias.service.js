const { models } = require('../libs/sequelize.js')

async function agregarAsignacionesGuias(idAsignacion, guias, options = {}) {
  const data = guias.map((idGuia) => ({ idAsignacion, idGuia }))
  return await models.AsignacionesGuias.bulkCreate(data, { ...options })
}

async function eliminarAsignacionesGuias(idAsignacion, options = {}) {
  return await models.AsignacionesGuias.destroy({
    where: { idAsignacion },
    ...options
  })
}

async function actualizarAsignacionesGuias(idAsignacion, guias, options = {}) {
  await eliminarAsignacionesGuias(idAsignacion, options)
  return await agregarAsignacionesGuias(idAsignacion, guias, options)
}

module.exports = {
  agregarAsignacionesGuias,
  eliminarAsignacionesGuias,
  actualizarAsignacionesGuias
}

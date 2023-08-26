const { models } = require('../libs/sequelize.js')

async function agregarAsignacionesContratos(
  idAsignacion,
  contratos,
  options = {}
) {
  const data = contratos.map(({ idContrato }) => ({ idAsignacion, idContrato }))
  return await models.AsignacionesContratos.bulkCreate(data, { ...options })
}

async function eliminarAsignacionesContratos(idAsignacion, options = {}) {
  return await models.AsignacionesContratos.destroy({
    where: { idAsignacion },
    ...options
  })
}

async function actualizarAsignacionesContratos(
  idAsignacion,
  contratos,
  options = {}
) {
  await eliminarAsignacionesContratos(idAsignacion, options)
  return await agregarAsignacionesContratos(idAsignacion, contratos, options)
}

module.exports = {
  agregarAsignacionesContratos,
  eliminarAsignacionesContratos,
  actualizarAsignacionesContratos
}

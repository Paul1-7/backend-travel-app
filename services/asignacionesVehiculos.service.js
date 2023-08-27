const { models } = require('../libs/sequelize.js')

async function agregarAsignacionesVehiculos(
  idAsignacion,
  vehiculos,
  options = {}
) {
  const data = vehiculos.map((idVehiculo) => ({ idAsignacion, idVehiculo }))
  return await models.AsignacionesVehiculos.bulkCreate(data, { ...options })
}

async function eliminarAsignacionesVehiculos(idAsignacion, options = {}) {
  return await models.AsignacionesVehiculos.destroy({
    where: { idAsignacion },
    ...options
  })
}

async function actualizarAsignacionesVehiculos(
  idAsignacion,
  vehiculos,
  options = {}
) {
  await eliminarAsignacionesVehiculos(idAsignacion, options)
  return await agregarAsignacionesVehiculos(idAsignacion, vehiculos, options)
}

module.exports = {
  agregarAsignacionesVehiculos,
  eliminarAsignacionesVehiculos,
  actualizarAsignacionesVehiculos
}

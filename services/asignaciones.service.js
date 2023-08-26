const { models } = require('../libs/sequelize.js')

async function ListarAsignaciones() {
  return await models.Asignaciones.findAll({})
}

async function BuscarAsignacion(id) {
  return await models.Asignaciones.findByPk(id, {
    where: {
      borrado: false
    }
  })
}

async function ContarCodigoAsignaciones() {
  const today = format(new Date(), 'yyyyMMdd')
  const pattern = `A-${today}%`
  return await models.Asignaciones.count({
    where: {
      codReferencia: {
        [Op.like]: pattern
      }
    }
  })
}

async function AgregarAsignacion(data, options = {}) {
  return await models.Asignaciones.create(data, options)
}

async function ModificarAsignacion(id, cambio, options = {}) {
  const chofer = await models.Asignaciones.findByPk(id)
  return await chofer?.update(cambio, options)
}

module.exports = {
  ListarAsignaciones,
  BuscarAsignacion,
  AgregarAsignacion,
  ModificarAsignacion,
  ContarCodigoAsignaciones
}

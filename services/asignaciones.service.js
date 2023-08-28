const { format } = require('date-fns')
const { models } = require('../libs/sequelize.js')
const { Op } = require('sequelize')

async function ListarAsignaciones() {
  return await models.Asignaciones.findAll({
    include: [
      {
        model: models.AsignacionesContratos,
        as: 'contratos',
        include: [
          {
            model: models.Contratos,
            as: 'contrato',
            include: [
              {
                model: models.Rutas,
                as: 'ruta',
                attributes: ['titulo']
              }
            ]
          }
        ]
      }
    ]
  })
}

async function BuscarAsignacion(id) {
  return await models.Asignaciones.findByPk(id, {
    include: [
      {
        model: models.Contratos,
        as: 'asigCont',
        include: ['ruta']
      },
      {
        model: models.Usuarios,
        as: 'asigGuias',
        through: []
      },
      {
        model: models.Vehiculos,
        as: 'asigVeh',
        through: []
      }
    ]
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

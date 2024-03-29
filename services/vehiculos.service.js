const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarVehiculos() {
  return await models.Vehiculos.findAll({
    where: {
      borrado: false
    }
  })
}

async function ListarVehiculosSinAsignacion(date) {
  return await models.Vehiculos.findAll({
    include: [
      {
        model: models.Asignaciones,
        as: 'asignaciones2',
        through: { attributes: [] }
      }
    ],
    where: {
      [Op.or]: [
        { '$asignaciones2.id$': null },
        {
          '$asignaciones2.fecha$': {
            [Op.ne]: date
          }
        }
      ]
    }
  })
}

async function BuscarVehiculo(id) {
  return await models.Vehiculos.findByPk(id, {
    where: {
      borrado: false
    }
  })
}

async function AgregarVehiculo(lugar) {
  return await models.Vehiculos.create(lugar)
}

async function ModificarVehiculo(id, cambio) {
  const chofer = await models.Vehiculos.findByPk(id)
  return await chofer?.update(cambio)
}

async function EliminarVehiculo(id, options = {}) {
  const result = await models.Vehiculos.update(
    { borrado: true },
    {
      where: { id },
      ...options
    }
  )

  return result[0] > 0
}

module.exports = {
  ListarVehiculos,
  BuscarVehiculo,
  AgregarVehiculo,
  ModificarVehiculo,
  EliminarVehiculo,
  ListarVehiculosSinAsignacion
}

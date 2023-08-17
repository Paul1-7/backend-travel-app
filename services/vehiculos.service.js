const { models } = require('../libs/sequelize.js')

async function ListarVehiculos() {
  return await models.Vehiculos.findAll({
    where: {
      borrado: false
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

async function AgregarVehBuscarVehiculo(lugar) {
  return await models.Vehiculos.create(lugar)
}

async function ModificarVehBuscarVehiculo(id, cambio) {
  const chofer = await models.Vehiculos.findByPk(id)
  return await chofer?.update(cambio)
}

async function EliminarVehBuscarVehiculo(id, options = {}) {
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
  AgregarVehBuscarVehiculo,
  ModificarVehBuscarVehiculo,
  EliminarVehBuscarVehiculo
}

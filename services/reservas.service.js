const { models } = require('../libs/sequelize.js')

async function ListarReservas() {
  return await models.Reservas.findAll()
}

async function BuscarReservas(id) {
  return await models.Reservas.findByPk(id,{
    include: [
      "Reservas"
    ]
  })
}

async function AgregarReservas(reserva) {
  return await models.Reservas.create(reserva)
}

async function ModificarReservas(id, cambio) {
  const user = await models.Reservas.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarReservas(id) {
  const user = await models.Reservas.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarReservas,
  BuscarReservas,
  AgregarReservas,
  ModificarReservas,
  EliminarReservas
}

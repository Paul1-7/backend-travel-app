const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/reservas.service.js')

const msg = {
  notFound: 'Reserva no encontrada',
  delete: 'Reserva eliminada'
}

const ListarReservas = async (req, res, next) => {
  try {
    const reservas = await services.ListarReservas()
    res.json(reservas)
  } catch (error) {
    next(error)
  }
}

const BuscarReservas = async (req, res, next) => {
  try {
    const { id } = req.params
    const reserva = await services.BuscarReservas(id)

    if (!reserva) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(reserva)
  } catch (error) {
    next(error)
  }
}

const AgregarReservas = async (req, res, next) => {
  try {
    const { body } = req
    const reserva = await services.AgregarReservas(body)
    res.json(reserva)
  } catch (error) {
    next(error)
  }
}

const ModificarReservas = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const reserva = await services.ModificarReservas(id, body)

    if (!reserva) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(reserva)
  } catch (error) {
    next(error)
  }
}

const EliminarReservas = async (req, res, next) => {
  try {
    const { id } = req.params
    const reserva = await services.EliminarReservas(id)

    if (!reserva) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarReservas,
  BuscarReservas,
  AgregarReservas,
  ModificarReservas,
  EliminarReservas
}

const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/horariosLugares.service.js')

const msg = {
  notFound: 'horario del lugar no encontrado',
  addSuccess: 'horario del lugar agregado correctamente',
  modifySuccess: 'horario del lugar modificado correctamente',
  deleteSuccess: 'horario del lugar eliminado correctamente'
}

const listarHorariosLugares = async (req, res, next) => {
  try {
    const horarios = await services.listarHorariosLugares()
    res.json(horarios)
  } catch (error) {
    next(error)
  }
}

const buscarHorarioLugar = async (req, res, next) => {
  try {
    const { id } = req.params
    const horarios = await services.buscarHorarioLugar(id)

    if (!horarios) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(horarios)
  } catch (error) {
    next(error)
  }
}

const agregarHorarioLugar = async (req, res, next) => {
  try {
    const { body } = req
    await services.agregarHorarioLugar(body)
    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const modificarHorarioLugar = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    const horario = await services.modificarHorarioLugar(id, body)

    if (!horario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

const eliminarHorarioLugar = async (req, res, next) => {
  try {
    const { id } = req.params
    await services.eliminarHorarioLugar(id)

    res.json({ message: msg.deleteSuccess, id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listarHorariosLugares,
  modificarHorarioLugar,
  buscarHorarioLugar,
  agregarHorarioLugar,
  eliminarHorarioLugar
}

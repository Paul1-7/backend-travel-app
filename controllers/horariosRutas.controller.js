const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/horariosRutas.service.js')

const msg = {
  notFound: 'horario de la ruta no encontrado',
  addSuccess: 'horario de la ruta agregado correctamente',
  modifySuccess: 'horario de la ruta modificado correctamente',
  deleteSuccess: 'horario de la ruta eliminado correctamente'
}

const listarHorariosRutas = async (req, res, next) => {
  try {
    const horarios = await services.listarHorariosRutas()
    res.json(horarios)
  } catch (error) {
    next(error)
  }
}

const buscarHorarioRuta = async (req, res, next) => {
  try {
    const { id } = req.params
    const horarios = await services.buscarHorarioRuta(id)

    if (!horarios) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(horarios)
  } catch (error) {
    next(error)
  }
}

const agregarHorarioRuta = async (req, res, next) => {
  try {
    const { body } = req
    await services.agregarHorarioRuta(body)
    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const modificarHorarioRuta = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    const horario = await services.modificarHorarioRuta(id, body)

    if (!horario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

const eliminarHorarioRuta = async (req, res, next) => {
  try {
    const { id } = req.params
    await services.eliminarHorarioRuta(id)

    res.json({ message: msg.deleteSuccess, id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  listarHorariosRutas,
  modificarHorarioRuta,
  buscarHorarioRuta,
  agregarHorarioRuta,
  eliminarHorarioRuta
}

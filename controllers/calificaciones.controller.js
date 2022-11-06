const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/calificaciones.service.js')

const msg = {
  notFound: 'Calificacion no encontrada',
  delete: 'Calificacion eliminada'
}

const ListarCalificaciones = async (req, res, next) => {
  try {
    const calificaciones = await services.ListarCalificaciones()
    res.json(calificaciones)
  } catch (error) {
    next(error)
  }
}

const BuscarCalificaciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const calificacion = await services.BuscarCalificaciones(id)

    if (!calificacion) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(calificacion)
  } catch (error) {
    next(error)
  }
}

const AgregarCalificaciones = async (req, res, next) => {
  try {
    const { body } = req
    const calificacion = await services.AgregarCalificaciones(body)
    res.json(calificacion)
  } catch (error) {
    next(error)
  }
}

const ModificarCalificaciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const calificacion = await services.ModificarCalificaciones(id, body)

    if (!calificacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(calificacion)
  } catch (error) {
    next(error)
  }
}

const EliminarCalificaciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const calificacion = await services.EliminarCalificaciones(id)

    if (!calificacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarCalificaciones,
  BuscarCalificaciones,
  AgregarCalificaciones,
  ModificarCalificaciones,
  EliminarCalificaciones
}

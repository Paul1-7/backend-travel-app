const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/contrataciones.service.js')

const msg = {
  notFound: 'Contratacion no encontrada',
  delete: 'Contratacion eliminada'
}

const ListarContrataciones = async (req, res, next) => {
  try {
    const contrataciones = await services.ListarContrataciones()
    res.json(contrataciones)
  } catch (error) {
    next(error)
  }
}

const BuscarContrataciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const contratacion = await services.BuscarContrataciones(id)

    if (!contratacion) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(contratacion)
  } catch (error) {
    next(error)
  }
}

const AgregarContrataciones = async (req, res, next) => {
  try {
    const { body } = req
    const contratacion = await services.AgregarContrataciones(body)
    res.json(contratacion)
  } catch (error) {
    next(error)
  }
}

const ModificarContrataciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const contratacion = await services.ModificarContrataciones(id, body)

    if (!contratacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(contratacion)
  } catch (error) {
    next(error)
  }
}

const EliminarContrataciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const contratacion = await services.EliminarContrataciones(id)

    if (!contratacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarContrataciones,
  BuscarContrataciones,
  AgregarContrataciones,
  ModificarContrataciones,
  EliminarContrataciones
}

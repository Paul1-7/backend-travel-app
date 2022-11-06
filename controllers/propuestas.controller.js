const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/propuestas.service.js')

const msg = {
  notFound: 'Propuesta no encontrada',
  delete: 'Propuesta eliminada'
}

const ListarPropuestas = async (req, res, next) => {
  try {
    const propuestas = await services.ListarPropuestas()
    res.json(propuestas)
  } catch (error) {
    next(error)
  }
}

const BuscarPropuestas = async (req, res, next) => {
  try {
    const { id } = req.params
    const propuesta = await services.BuscarPropuestas(id)

    if (!propuesta) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(propuesta)
  } catch (error) {
    next(error)
  }
}

const AgregarPropuestas = async (req, res, next) => {
  try {
    const { body } = req
    const propuesta = await services.AgregarPropuestas(body)
    res.json(propuesta)
  } catch (error) {
    next(error)
  }
}

const ModificarPropuestas = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const propuesta = await services.ModificarPropuestas(id, body)

    if (!propuesta) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(propuesta)
  } catch (error) {
    next(error)
  }
}

const EliminarPropuestas = async (req, res, next) => {
  try {
    const { id } = req.params
    const propuesta = await services.EliminarPropuestas(id)

    if (!propuesta) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarPropuestas,
  BuscarPropuestas,
  AgregarPropuestas,
  ModificarPropuestas,
  EliminarPropuestas
}

const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/imagenes.service.js')

const msg = {
  notFound: 'Imagen no encontrada',
  delete: 'Imagen eliminada'
}

const ListarImagenes = async (req, res, next) => {
  try {
    const imagenes = await services.ListarImagenes()
    res.json(imagenes)
  } catch (error) {
    next(error)
  }
}

const BuscarImagenes = async (req, res, next) => {
  try {
    const { id } = req.params
    const imagen = await services.BuscarImagenes(id)

    if (!imagen) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(imagen)
  } catch (error) {
    next(error)
  }
}

const AgregarImagenes = async (req, res, next) => {
  try {
    const { body } = req
    const imagen = await services.AgregarImagenes(body)
    res.json(imagen)
  } catch (error) {
    next(error)
  }
}

const ModificarImagenes = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const imagen = await services.ModificarImagenes(id, body)

    if (!imagen) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(imagen)
  } catch (error) {
    next(error)
  }
}

const EliminarImagenes = async (req, res, next) => {
  try {
    const { id } = req.params
    const imagen = await services.EliminarImagenes(id)

    if (!imagen) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarImagenes,
  BuscarImagenes,
  AgregarImagenes,
  ModificarImagenes,
  EliminarImagenes
}

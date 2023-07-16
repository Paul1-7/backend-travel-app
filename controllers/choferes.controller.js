const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')

const services = require('../services/choferes.service.js')
const { AgregarPuntos } = require('../services/puntos.service.js')

const msg = {
  notFound: 'Chofer no encontrado',
  addSuccess: 'Chofer guardado con exito',
  modifySuccess: 'Chofer modificado correctamente',
  deleteSuccess: 'Chofer eliminado correctamente',
  notValid: 'La información no es valida'
}

const ListarChoferes = async (req, res, next) => {
  try {
    const choferes = await services.ListarChoferes()
    res.json(choferes)
  } catch (error) {
    next(error)
  }
}

const BuscarChofer = async (req, res, next) => {
  try {
    const { id } = req.params
    const chofer = await services.BuscarChofer(id)

    if (!chofer) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(chofer)
  } catch (error) {
    next(error)
  }
}

const AgregarChofer = async (req, res, next) => {
  try {
    const chofer = req.body

    await services.AgregarChofer(chofer)

    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const ModificarChofer = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const chofer = await services.ModificarChofer(id, body)

    if (!chofer) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

const EliminarChofer = async (req, res, next) => {
  try {
    const { id } = req.params
    const chofer = await services.EliminarChofer(id)

    if (!chofer) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.deleteSuccess, id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarChoferes,
  BuscarChofer,
  AgregarChofer,
  ModificarChofer,
  EliminarChofer
}

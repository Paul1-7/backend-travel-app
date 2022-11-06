const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/infoagencia.service.js')

const msg = {
  notFound: 'Informacion no encontrada',
  delete: 'Informacion eliminada'
}

const ListarInfo = async (req, res, next) => {
  try {
    const info_agencia = await services.ListarInfo()
    res.json(info_agencia)
  } catch (error) {
    next(error)
  }
}

const BuscarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const info = await services.BuscarInfo(id)

    if (!info) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(info)
  } catch (error) {
    next(error)
  }
}

const AgregarInfo = async (req, res, next) => {
  try {
    const { body } = req
    const info = await services.AgregarInfo(body)
    res.json(info)
  } catch (error) {
    next(error)
  }
}

const ModificarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const info = await services.ModificarInfo(id, body)

    if (!info) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(info)
  } catch (error) {
    next(error)
  }
}

const EliminarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const info = await services.EliminarInfo(id)

    if (!info) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarInfo,
  BuscarInfo,
  AgregarInfo,
  ModificarInfo,
  EliminarInfo
}

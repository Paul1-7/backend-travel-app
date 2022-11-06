const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/infotarija.service.js')

const msg = {
  notFound: 'Informacion no encontrada',
  delete: 'Informacion eliminada'
}

const ListarInfo = async (req, res, next) => {
  try {
    const info_tarija = await services.ListarInfo()
    res.json(info_tarija)
  } catch (error) {
    next(error)
  }
}

const BuscarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const infor = await services.BuscarInfo(id)

    if (!infor) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(infor)
  } catch (error) {
    next(error)
  }
}

const AgregarInfo = async (req, res, next) => {
  try {
    const { body } = req
    const infor = await services.AgregarInfo(body)
    res.json(infor)
  } catch (error) {
    next(error)
  }
}

const ModificarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const infor = await services.ModificarInfo(id, body)

    if (!infor) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(infor)
  } catch (error) {
    next(error)
  }
}

const EliminarInfo = async (req, res, next) => {
  try {
    const { id } = req.params
    const infor = await services.EliminarInfo(id)

    if (!infor) return ERROR_RESPONSE.notFound(msg.notFound, res)

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

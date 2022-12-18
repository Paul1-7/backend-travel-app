const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const { BuscarDiasPorIds } = require('../services/dias.service.js')
const services = require('../services/lugares.service.js')
const { AgregarPuntos } = require('../services/puntos.service.js')

const msg = {
  notFound: 'Lugar no encontrado',
  delete: 'Lugar eliminado',
  addSuccess: 'Lugar guardado con exito',
  notValid: 'La información no es valida'
}

const ListarLugares = async (req, res, next) => {
  try {
    const lugares = await services.ListarLugares()
    res.json(lugares)
  } catch (error) {
    next(error)
  }
}

const BuscarLugares = async (req, res, next) => {
  try {
    const { id } = req.params
    const lugar = await services.BuscarLugares(id)

    if (!lugar) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(lugar)
  } catch (error) {
    next(error)
  }
}

const AgregarLugares = async (req, res, next) => {
  try {
    const { lugar, punto, horarios, idDias } = req.body

    if (
      idDias.length !== horarios.length ||
      idDias.length === 0 ||
      horarios.length === 0
    )
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    const dias = await BuscarDiasPorIds(idDias)

    if (dias.length !== idDias.length)
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    const lugarAgregado = await services.AgregarLugares(lugar)
    const { id } = lugarAgregado

    await AgregarPuntos({ ...punto, idLugar: id })
    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const ModificarLugares = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const lugar = await services.ModificarLugares(id, body)

    if (!lugar) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(lugar)
  } catch (error) {
    next(error)
  }
}

const EliminarLugares = async (req, res, next) => {
  try {
    const { id } = req.params
    const lugar = await services.EliminarLugares(id)

    if (!lugar) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarLugares,
  BuscarLugares,
  AgregarLugares,
  ModificarLugares,
  EliminarLugares
}

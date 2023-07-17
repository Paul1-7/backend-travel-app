const sequelize = require('../libs/sequelize.js')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/lugares.service.js')
const {
  AgregarPuntos,
  ModificarPuntosPorIdLugar
} = require('../services/puntos.service.js')

const msg = {
  notFound: 'Lugar no encontrado',
  delete: 'Lugar eliminado',
  addSuccess: 'Lugar guardado con exito',
  modifySuccess: 'Lugar actualizado correctamente',
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
    const { lugar, punto } = req.body

    const lugarAgregado = await services.AgregarLugares(lugar)
    const { id } = lugarAgregado

    await AgregarPuntos({ ...punto, idLugar: id })
    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const ModificarLugares = async (req, res, next) => {
  const transaction = await sequelize.transaction()
  try {
    const { id } = req.params
    const { lugar, punto } = req.body
    await services.ModificarLugares(id, lugar, { transaction })
    await ModificarPuntosPorIdLugar(id, punto, { transaction })

    await transaction.commit()
    res.json({ message: msg.modifySuccess })
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

const EliminarLugares = async (req, res, next) => {
  try {
    const { id } = req.params
    const lugar = await services.EliminarLugares(id)

    if (!lugar) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete, id })
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

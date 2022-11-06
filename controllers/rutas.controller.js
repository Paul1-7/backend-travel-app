const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const {
  AgregarItinerario,
  EliminarItinerario,
  ModificarItinerario
} = require('../services/itinerario.service.js')
const { BuscarPuntosPorIds } = require('../services/puntos.service.js')
const services = require('../services/rutas.service.js')

const msg = {
  notFound: 'Ruta no encontrada',
  delete: 'Ruta eliminada',
  notValid: 'el punto no es valido',
  addSuccess: 'Ruta guardada'
}

const ListarRutas = async (req, res, next) => {
  try {
    const rutas = await services.ListarRutas()
    res.json(rutas)
  } catch (error) {
    next(error)
  }
}

const BuscarRutas = async (req, res, next) => {
  try {
    const { id } = req.params
    const ruta = await services.BuscarRutas(id)

    if (!ruta) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(ruta)
  } catch (error) {
    next(error)
  }
}

const AgregarRutas = async (req, res, next) => {
  try {
    const { body } = req
    const { itinerarios, ...ruta } = body

    console.log([{ ruta }, { itinerarios }])

    const idPuntos = itinerarios.map((punto) => punto.idPunto)
    const puntos = await BuscarPuntosPorIds(idPuntos)

    if (itinerarios.length !== puntos.length || itinerarios.length <= 0)
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    const newruta = await services.AgregarRutas(ruta)

    const newItinerarios = itinerarios.map((punto) => {
      return {
        ...punto,
        idRuta: newruta.toJSON().id
      }
    })

    await AgregarItinerario(newItinerarios)

    res.json({
      message: msg.addSuccess
    })
  } catch (error) {
    next(error)
  }
}

const ModificarRutas = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const { itinerarios, ...ruta } = body

    const existRuta = await services.BuscarRutas(id)
    if (!existRuta) return ERROR_RESPONSE.notFound(msg.notFound, res)

    const idPuntos = itinerarios.map((punto) => punto.CodPunto)
    const puntos = await BuscarPuntosPorIds(idPuntos)

    if (itinerarios.length !== puntos.length || itinerarios.length <= 0)
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    await services.ModificarRutas(id, ruta)

    const newItinerarios = itinerarios.map((punto) => {
      return {
        ...punto,
        CodRuta: id
      }
    })
    await ModificarItinerario(id, newItinerarios)
    res.json(ruta)
  } catch (error) {
    next(error)
  }
}

const EliminarRutas = async (req, res, next) => {
  try {
    const { id } = req.params
    await EliminarItinerario(id)
    const ruta = await services.EliminarRutas(id)

    if (!ruta) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarRutas,
  BuscarRutas,
  AgregarRutas,
  ModificarRutas,
  EliminarRutas
}

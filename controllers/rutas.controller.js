const sequelize = require('../libs/sequelize.js')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const {
  AgregarItinerario,
  ModificarItinerario
} = require('../services/itinerario.service.js')

const services = require('../services/rutas.service.js')

const msg = {
  notFound: 'Ruta no encontrada',
  delete: 'Ruta eliminada',
  notValid: 'La información no es valida',
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

const ListarRutasConHorarios = async (req, res, next) => {
  try {
    const rutas = await services.ListarRutasConHorarios()
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

    const newRuta = await services.AgregarRutas(ruta)

    const newItinerarios = itinerarios.map((itinerario) => {
      return {
        ...itinerario,
        idRuta: newRuta.id
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
  const transaction = await sequelize.transaction()
  try {
    const { id } = req.params
    const { body } = req
    const { itinerarios, ...ruta } = body

    await services.ModificarRutas(id, ruta, { transaction })

    const newItinerarios = itinerarios.map((itinerario) => {
      return {
        ...itinerario,
        idRuta: id
      }
    })
    await ModificarItinerario(id, newItinerarios, { transaction })
    await transaction.commit()
    res.json({ message: msg.addSuccess })
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

const EliminarRutas = async (req, res, next) => {
  try {
    const { id } = req.params

    await services.EliminarRutas(id)
    res.json({ message: msg.delete, id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarRutas,
  BuscarRutas,
  AgregarRutas,
  ModificarRutas,
  EliminarRutas,
  ListarRutasConHorarios
}

const { CONTRACTS_REPORT_ORDER_BY } = require('../constants/reports.js')
const sequelize = require('../libs/sequelize.js')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/asignaciones.service.js')
const {
  agregarAsignacionesContratos
} = require('../services/asignacionesContratos.service.js')
const { generateCodeToDocuments } = require('../utils/dataHandler.js')

const msg = {
  notFound: 'Asignacion no encontrada',
  addSuccess: 'Asignacion guardada correctamente',
  modifySuccess: 'Asignacion actualizada correctamente'
}

const ListarAsignaciones = async (req, res, next) => {
  try {
    const asignaciones = await services.ListarAsignaciones()
    res.json(asignaciones)
  } catch (error) {
    next(error)
  }
}

const obtenerAsignacionesPorFecha = async (req, res, next) => {
  try {
    const { dateStart, dateEnd, orderBy } = req.query || {}

    if (!dateStart || !dateEnd || !orderBy)
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    const selectedOption = CONTRACTS_REPORT_ORDER_BY.find(
      ({ id }) => id === orderBy
    )

    const options = {
      dateStart,
      dateEnd,
      orderBy: selectedOption?.criteria ?? orderBy
    }

    const sales = await services.obtenerAsignacionesPorFecha(options)
    res.json(sales)
  } catch (error) {
    next(error)
  }
}

const BuscarAsignacion = async (req, res, next) => {
  try {
    const { id } = req.params
    const asignacion = await services.BuscarAsignacion(id)

    if (!asignacion) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(asignacion)
  } catch (error) {
    next(error)
  }
}

const AgregarAsignacion = async (req, res, next) => {
  const transaction = await sequelize.transaction()
  try {
    const { asignacion, contratos, guias, vehiculos } = req.body
    const numberSaleCode = await services.ContarCodigoAsignaciones()

    const addedAssignment = await services.AgregarAsignacion(
      {
        ...asignacion,
        codReferencia: generateCodeToDocuments('A', numberSaleCode)
      },
      { transaction }
    )

    await agregarAsignacionesContratos(addedAssignment.toJSON().id, contratos, {
      transaction
    })
    await agregarAsignacionesContratos(addedAssignment.toJSON().id, guias, {
      transaction
    })
    await agregarAsignacionesContratos(addedAssignment.toJSON().id, vehiculos, {
      transaction
    })

    await transaction.commit()
    res.json({ message: msg.addSuccess })
  } catch (error) {
    await transaction.rollback()
    next(error)
  }
}

const ModificarAsignacion = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const asignacion = await services.ModificarAsignacion(id, body)

    if (!asignacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarAsignaciones,
  BuscarAsignaciones: BuscarAsignacion,
  AgregarAsignacion,
  ModificarAsignacion,
  obtenerAsignacionesPorFecha
}

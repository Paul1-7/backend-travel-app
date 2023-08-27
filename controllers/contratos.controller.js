const { CONTRACTS_REPORT_ORDER_BY } = require('../constants/reports.js')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/contratos.service.js')
const { generateCodeToDocuments } = require('../utils/dataHandler.js')

const msg = {
  notFound: 'Contrato no encontrada',
  addSuccess: 'Contrato guardado correctamente',
  modifySuccess: 'Contrato actualizado correctamente'
}

const ListarContrataciones = async (req, res, next) => {
  try {
    const contrataciones = await services.ListarContratos()
    res.json(contrataciones)
  } catch (error) {
    next(error)
  }
}

const ListarContratosSinAsignacion = async (req, res, next) => {
  try {
    const { date } = req.params
    const contratos = await services.ListarContratosSinAsignacion(date)
    res.json(contratos)
  } catch (error) {
    next(error)
  }
}

const ListarContratacionesPorAgrupacion = async (req, res, next) => {
  try {
    const contrataciones =
      await services.ListarContratosPorAgrupacionRutasFechas()
    res.json(contrataciones)
  } catch (error) {
    next(error)
  }
}

const ListarContratosPorRutasFechas = async (req, res, next) => {
  try {
    console.log(req.query)
    const { fechaSalida, idRuta } = req.query
    const contrataciones = await services.ListarContratosPorRutasFechas(
      fechaSalida,
      idRuta
    )
    res.json(contrataciones)
  } catch (error) {
    next(error)
  }
}

const obtenerContratosPorFecha = async (req, res, next) => {
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

    const sales = await services.obtenerContratosPorFecha(options)
    res.json(sales)
  } catch (error) {
    next(error)
  }
}

const BuscarContrataciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const contratacion = await services.BuscarContrato(id)

    if (!contratacion) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(contratacion)
  } catch (error) {
    next(error)
  }
}

const AgregarContrataciones = async (req, res, next) => {
  try {
    const { body } = req
    const numberSaleCode = await services.ContarCodigoContrato()
    await services.AgregarContrato({
      ...body,
      codReferencia: generateCodeToDocuments('C', numberSaleCode)
    })
    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const ModificarContrataciones = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const contratacion = await services.ModificarContrato(id, body)

    if (!contratacion) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarContrataciones,
  BuscarContrataciones,
  AgregarContrataciones,
  ModificarContrataciones,
  obtenerContratosPorFecha,
  ListarContratacionesPorAgrupacion,
  ListarContratosPorRutasFechas,
  ListarContratosSinAsignacion
}

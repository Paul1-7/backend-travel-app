const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')

const services = require('../services/vehiculos.service.js')

const msg = {
  notFound: 'Vehiculo no encontrado',
  addSuccess: 'Vehiculo guardado con exito',
  modifySuccess: 'Vehiculo modificado correctamente',
  deleteSuccess: 'Vehiculo eliminado correctamente',
  notValid: 'La información no es valida'
}

const ListarVehiculos = async (req, res, next) => {
  try {
    const vehiculos = await services.ListarVehiculos()
    res.json(vehiculos)
  } catch (error) {
    next(error)
  }
}

const ListarVehiculosSinAsignacion = async (req, res, next) => {
  try {
    console.log('object')
    const { date } = req.params
    console.log('TCL: ListarVehiculosSinAsignacion -> date', date)

    const vehiculos = await services.ListarVehiculosSinAsignacion(date)
    res.json(vehiculos)
  } catch (error) {
    next(error)
  }
}

const BuscarVehiculo = async (req, res, next) => {
  try {
    const { id } = req.params
    const vehicle = await services.BuscarVehiculo(id)

    if (!vehicle) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(vehicle)
  } catch (error) {
    next(error)
  }
}

const AgregarVehiculo = async (req, res, next) => {
  try {
    const vehicle = req.body

    await services.AgregarVehiculo(vehicle)

    res.json({ message: msg.addSuccess })
  } catch (error) {
    next(error)
  }
}

const ModificarVehiculo = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const vehicle = await services.ModificarVehiculo(id, body)

    if (!vehicle) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

const EliminarVehiculo = async (req, res, next) => {
  try {
    const { id } = req.params
    const vehicle = await services.EliminarVehiculo(id)

    if (!vehicle) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.deleteSuccess, id })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarVehiculos,
  BuscarVehiculo,
  AgregarVehiculo,
  ModificarVehiculo,
  EliminarVehiculo,
  ListarVehiculosSinAsignacion
}

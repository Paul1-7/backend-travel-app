const express = require('express')
const { checkId } = require('../middlewares/validator.handle.js')
const {
  ListarVehiculos,
  BuscarVehiculo,
  AgregarVehiculo,
  ModificarVehiculo,
  EliminarVehiculo,
  ListarVehiculosSinAsignacion
} = require('../controllers/vehiculos.controller.js')

const vehiculos = express.Router()

vehiculos.get('/', ListarVehiculos)
vehiculos.get('/:id', checkId, BuscarVehiculo)
vehiculos.get('/sin-asignaciones/:date', ListarVehiculosSinAsignacion)
vehiculos.post('/', AgregarVehiculo)
vehiculos.put('/:id', checkId, ModificarVehiculo)
vehiculos.delete('/:id', checkId, EliminarVehiculo)

module.exports = vehiculos

const express = require('express')
const {
  ListarAsignaciones,
  obtenerAsignacionesPorFecha,
  BuscarAsignaciones,
  AgregarAsignacion,
  ModificarAsignacion
} = require('../controllers/asignaciones.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Asignacion = express.Router()

Asignacion.get('/', ListarAsignaciones)
Asignacion.get('/reportes/', obtenerAsignacionesPorFecha)
Asignacion.get('/:id', checkId, BuscarAsignaciones)
Asignacion.post('/', AgregarAsignacion)
Asignacion.put('/:id', checkId, ModificarAsignacion)

module.exports = Asignacion

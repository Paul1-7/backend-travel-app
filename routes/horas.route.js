const express = require('express')
const {
  ListarHorasRutas
  // BuscarHoras,
  // AgregarHoras,
  // ModificarHoras,
  // EliminarHoras
} = require('../controllers/horas.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Horas = express.Router()

Horas.get('/rutas', ListarHorasRutas)
// Horas.get('/:id', checkId, BuscarHoras)
// Horas.post('/', AgregarHoras)
// Horas.put('/:id', checkId, ModificarHoras)
// Horas.delete('/:id', checkId, EliminarHoras)

module.exports = Horas

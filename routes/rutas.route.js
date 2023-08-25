const express = require('express')
const {
  ListarRutas,
  BuscarRutas,
  AgregarRutas,
  ModificarRutas,
  EliminarRutas,
  ListarRutasConHorarios
} = require('../controllers/rutas.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Rutas = express.Router()

Rutas.get('/', ListarRutas)
Rutas.get('/horarios', ListarRutasConHorarios)
Rutas.get('/:id', checkId, BuscarRutas)
Rutas.post('/', AgregarRutas)
Rutas.put('/:id', checkId, ModificarRutas)
Rutas.delete('/:id', checkId, EliminarRutas)

module.exports = Rutas

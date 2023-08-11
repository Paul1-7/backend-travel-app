const express = require('express')
const {
  ListarContrataciones,
  BuscarContrataciones,
  AgregarContrataciones,
  ModificarContrataciones,
  obtenerContratosPorFecha
} = require('../controllers/contratos.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Contrataciones = express.Router()

Contrataciones.get('/', ListarContrataciones)
Contrataciones.get('/reportes/', obtenerContratosPorFecha)
Contrataciones.get('/:id', checkId, BuscarContrataciones)
Contrataciones.post('/', AgregarContrataciones)
Contrataciones.put('/:id', checkId, ModificarContrataciones)

module.exports = Contrataciones

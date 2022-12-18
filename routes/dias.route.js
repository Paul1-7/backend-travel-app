const express = require('express')
const {
  ListarDias
  // BuscarDias,
  // AgregarDias,
  // ModificarDias,
  // EliminarDias
} = require('../controllers/dias.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Dias = express.Router()

Dias.get('/', ListarDias)
// Dias.get('/:id', checkId, BuscarDias)
// Dias.post('/', AgregarDias)
// Dias.put('/:id', checkId, ModificarDias)
// Dias.delete('/:id', checkId, EliminarDias)

module.exports = Dias

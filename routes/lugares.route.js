const express = require('express')
const { ListarLugares, BuscarLugares, AgregarLugares, ModificarLugares, EliminarLugares } = require('../controllers/lugares.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Lugares = express.Router()

Lugares.get('/', ListarLugares)
Lugares.get('/:id', checkId, BuscarLugares)
Lugares.post('/', AgregarLugares)
Lugares.put('/:id', checkId, ModificarLugares)
Lugares.delete('/:id', checkId, EliminarLugares)

module.exports = Lugares

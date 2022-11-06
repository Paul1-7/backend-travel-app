const express = require('express')
const { ListarPropuestas, BuscarPropuestas, AgregarPropuestas, ModificarPropuestas, EliminarPropuestas } = require('../controllers/propuestas.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Propuestas = express.Router()

Propuestas.get('/', ListarPropuestas)
Propuestas.get('/:id', checkId, BuscarPropuestas)
Propuestas.post('/', AgregarPropuestas)
Propuestas.put('/:id', checkId, ModificarPropuestas)
Propuestas.delete('/:id', checkId, EliminarPropuestas)

module.exports = Propuestas

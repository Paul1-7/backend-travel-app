const express = require('express')
const { ListarReservas, BuscarReservas, AgregarReservas, ModificarReservas, EliminarReservas } = require('../controllers/reservas.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Reservas = express.Router()

Reservas.get('/', ListarReservas)
Reservas.get('/:id', checkId, BuscarReservas)
Reservas.post('/', AgregarReservas)
Reservas.put('/:id', checkId, ModificarReservas)
Reservas.delete('/:id', checkId, EliminarReservas)

module.exports = Reservas

const express = require('express')
const {
  ListarClientes,
  BuscarCliente,
  AgregarCliente
} = require('../controllers/clientes.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Clientes = express.Router()

Clientes.get('/', ListarClientes)
Clientes.get('/:id', checkId, BuscarCliente)
Clientes.post('/', AgregarCliente)
// Clientes.put('/:id', checkId, ModificarClientes)
// Clientes.delete('/:id', checkId, EliminarClientes)

module.exports = Clientes

const express = require('express')
const {
  ListarClientes,
  BuscarCliente,
  AgregarCliente,
  ModificarCliente,
  EliminarCliente
} = require('../controllers/clientes.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Clientes = express.Router()

Clientes.get('/', ListarClientes)
Clientes.get('/:id', checkId, BuscarCliente)
Clientes.post('/', AgregarCliente)
Clientes.put('/:id', checkId, ModificarCliente)
Clientes.delete('/:id', checkId, EliminarCliente)

module.exports = Clientes

const express = require('express')
const {
  ListarEmpleados,
  BuscarEmpleado,
  AgregarEmpleado
} = require('../controllers/empleados.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Clientes = express.Router()

Clientes.get('/', ListarEmpleados)
Clientes.get('/:id', checkId, BuscarEmpleado)
Clientes.post('/', AgregarEmpleado)
// Clientes.put('/:id', checkId, ModificarClientes)
// Clientes.delete('/:id', checkId, EliminarClientes)

module.exports = Clientes

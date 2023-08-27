const express = require('express')
const {
  ListarEmpleados,
  BuscarEmpleado,
  AgregarEmpleado,
  ModificarEmpleado,
  EliminarEmpleado,
  ListarGuiasSinAsignacion
} = require('../controllers/empleados.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')

const Clientes = express.Router()

Clientes.get('/', ListarEmpleados)
Clientes.get('/sin-asignaciones/:date', ListarGuiasSinAsignacion)
Clientes.get('/:id', checkId, BuscarEmpleado)
Clientes.post('/', AgregarEmpleado)
Clientes.put('/:id', checkId, ModificarEmpleado)
Clientes.delete('/:id', checkId, EliminarEmpleado)

module.exports = Clientes

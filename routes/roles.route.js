const express = require('express')
const { ListarRoles, BuscarRoles, AgregarRoles, ModificarRoles, EliminarRoles } = require('../controllers/roles.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Roles = express.Router()

Roles.get('/', ListarRoles)
Roles.get('/:id', checkId, BuscarRoles)
Roles.post('/', AgregarRoles)
Roles.put('/:id', checkId, ModificarRoles)
Roles.delete('/:id', checkId, EliminarRoles)

module.exports = Roles

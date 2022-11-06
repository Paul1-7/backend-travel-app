const express = require('express')
const { ListarContrataciones, BuscarContrataciones, AgregarContrataciones, ModificarContrataciones, EliminarContrataciones } = require('../controllers/contrataciones.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Contrataciones = express.Router()

Contrataciones.get('/', ListarContrataciones)
Contrataciones.get('/:id', checkId, BuscarContrataciones)
Contrataciones.post('/', AgregarContrataciones)
Contrataciones.put('/:id', checkId, ModificarContrataciones)
Contrataciones.delete('/:id', checkId, EliminarContrataciones)

module.exports = Contrataciones

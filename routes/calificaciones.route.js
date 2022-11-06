const express = require('express')
const { ListarCalificaciones, BuscarCalificaciones, AgregarCalificaciones, ModificarCalificaciones, EliminarCalificaciones } = require('../controllers/calificaciones.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Calificaciones = express.Router()

Calificaciones.get('/', ListarCalificaciones)
Calificaciones.get('/:id', checkId, BuscarCalificaciones)
Calificaciones.post('/', AgregarCalificaciones)
Calificaciones.put('/:id', checkId, ModificarCalificaciones)
Calificaciones.delete('/:id', checkId, EliminarCalificaciones)

module.exports = Calificaciones

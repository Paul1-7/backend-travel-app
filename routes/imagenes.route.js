const express = require('express')
const { ListarImagenes, BuscarImagenes, AgregarImagenes, ModificarImagenes, EliminarImagenes } = require('../controllers/imagenes.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Imagenes = express.Router()

Imagenes.get('/', ListarImagenes)
Imagenes.get('/:id', checkId, BuscarImagenes)
Imagenes.post('/', AgregarImagenes)
Imagenes.put('/:id', checkId, ModificarImagenes)
Imagenes.delete('/:id', checkId, EliminarImagenes)

module.exports = Imagenes

const express = require('express')
const { checkId } = require('../middlewares/validator.handle.js')
const {
  ListarChoferes,
  BuscarChofer,
  AgregarChofer,
  ModificarChofer,
  EliminarChofer
} = require('../controllers/choferes.controller.js')

const choferes = express.Router()

choferes.get('/', ListarChoferes)
choferes.get('/:id', checkId, BuscarChofer)
choferes.post('/', AgregarChofer)
choferes.put('/:id', checkId, ModificarChofer)
choferes.delete('/:id', checkId, EliminarChofer)

module.exports = choferes

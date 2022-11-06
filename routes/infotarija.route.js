const express = require('express')
const { ListarInfo, BuscarInfo, AgregarInfo, ModificarInfo, EliminarInfo } = require('../controllers/infotarija.controller.js')
const { checkId } = require('../middlewares/validator.handle.js')



const Info_agencia = express.Router()

Info_agencia.get('/', ListarInfo)
Info_agencia.get('/:id', checkId, BuscarInfo)
Info_agencia.post('/', AgregarInfo)
Info_agencia.put('/:id', checkId, ModificarInfo)
Info_agencia.delete('/:id', checkId, EliminarInfo)

module.exports = Info_agencia

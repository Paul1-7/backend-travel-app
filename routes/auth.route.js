const express = require('express')

const { loginUsuario } = require('../controllers/auth.controller.js')

const Asignacion = express.Router()

Asignacion.post('/', loginUsuario)

module.exports = Asignacion

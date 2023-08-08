const express = require('express')
const {
  agregarHorarioRuta,
  buscarHorarioRuta,
  eliminarHorarioRuta,
  listarHorariosRutas,
  modificarHorarioRuta
} = require('../controllers/horariosRutas.controller')

const HorariosRuta = express.Router()

HorariosRuta.get('/', listarHorariosRutas)
HorariosRuta.get('/:id', buscarHorarioRuta)
HorariosRuta.post('/', agregarHorarioRuta)
HorariosRuta.put('/:id', modificarHorarioRuta)
HorariosRuta.delete('/:id', eliminarHorarioRuta)

module.exports = HorariosRuta

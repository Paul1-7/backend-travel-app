const express = require('express')
const {
  agregarHorarioLugar,
  buscarHorarioLugar,
  eliminarHorarioLugar,
  listarHorariosLugares,
  modificarHorarioLugar
} = require('../controllers/horariosLugares.controller')

const HorariosLugar = express.Router()

HorariosLugar.get('/', listarHorariosLugares)
HorariosLugar.get('/:id', buscarHorarioLugar)
HorariosLugar.post('/', agregarHorarioLugar)
HorariosLugar.put('/:id', modificarHorarioLugar)
HorariosLugar.delete('/:id', eliminarHorarioLugar)

module.exports = HorariosLugar

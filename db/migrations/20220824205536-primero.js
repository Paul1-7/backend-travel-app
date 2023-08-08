'use strict'

const { RutasSchema } = require('../models/rutas.model')
const { PuntosSchema } = require('../models/puntos.model')
const { LugaresSchema } = require('../models/lugares.model')

const { ContratacionesSchema } = require('../models/contrataciones.model')
const { ImagenesSchema } = require('../models/imagenes.model')
const { UsuariosSchema } = require('../models/usuarios.model')
const { RolesSchema } = require('../models/roles.model')
const { UsurolesSchema } = require('../models/usuroles.model')
const { ItinerarioSchema } = require('../models/itinerario.model')
const { RutacontraSchema } = require('../models/rutacontra.model')

const { ChoferesSchema } = require('../models/choferes.model')
const { PlacesScheduleSchema } = require('../models/horariosLugares.model')
const { RoutesScheduleSchema } = require('../models/horariosRutas.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Choferes', ChoferesSchema)
    await queryInterface.createTable('Rutas', RutasSchema)
    await queryInterface.createTable('Contrataciones', ContratacionesSchema)
    await queryInterface.createTable('Lugares', LugaresSchema)
    await queryInterface.createTable('Puntos', PuntosSchema)

    await queryInterface.createTable('Imagenes', ImagenesSchema)
    await queryInterface.createTable('Usuarios', UsuariosSchema)
    await queryInterface.createTable('Roles', RolesSchema)
    await queryInterface.createTable('UsuRoles', UsurolesSchema)
    await queryInterface.createTable('Itinerario', ItinerarioSchema)
    await queryInterface.createTable('RutaContra', RutacontraSchema)
    await queryInterface.createTable('HorariosLugares', PlacesScheduleSchema)
    await queryInterface.createTable('HorariosRutas', RoutesScheduleSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable('HorariosRutas')
    await queryInterface.dropTable('HorariosLugares')
    await queryInterface.dropTable('UsuRoles')
    await queryInterface.dropTable('RutaContra')
    await queryInterface.dropTable('Itinerario')
    await queryInterface.dropTable('Imagenes')
    await queryInterface.dropTable('Rutas')
    await queryInterface.dropTable('Puntos')
    await queryInterface.dropTable('Lugares')
    await queryInterface.dropTable('Info_agencia')
    await queryInterface.dropTable('Info_tarija')
    await queryInterface.dropTable('Contrataciones')
    await queryInterface.dropTable('Usuarios')
    await queryInterface.dropTable('Roles')
    await queryInterface.dropTable('Choferes')
  }
}

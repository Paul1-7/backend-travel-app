'use strict'

const { RutasSchema } = require('../models/rutas.model')
const { PuntosSchema } = require('../models/puntos.model')
const { LugaresSchema } = require('../models/lugares.model')

const { ContratosSchema } = require('../models/contratos.model')
const { UsuariosSchema } = require('../models/usuarios.model')
const { RolesSchema } = require('../models/roles.model')
const { UsurolesSchema } = require('../models/usuroles.model')
const { ItinerarioSchema } = require('../models/itinerario.model')

const { ChoferesSchema } = require('../models/choferes.model')
const { PlacesScheduleSchema } = require('../models/horariosLugares.model')
const { RoutesScheduleSchema } = require('../models/horariosRutas.model')
const { VehiculosSchema } = require('../models/vehiculos.model')

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Vehiculos', VehiculosSchema)
    await queryInterface.createTable('Choferes', ChoferesSchema)
    await queryInterface.createTable('Rutas', RutasSchema)
    await queryInterface.createTable('Usuarios', UsuariosSchema)

    await queryInterface.createTable('Lugares', LugaresSchema)
    await queryInterface.createTable('Puntos', PuntosSchema)

    await queryInterface.createTable('Roles', RolesSchema)
    await queryInterface.createTable('UsuRoles', UsurolesSchema)
    await queryInterface.createTable('Itinerario', ItinerarioSchema)
    await queryInterface.createTable('HorariosLugares', PlacesScheduleSchema)

    await queryInterface.createTable('HorariosRutas', RoutesScheduleSchema)
    await queryInterface.createTable('Contratos', ContratosSchema)
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Contratos')
    await queryInterface.dropTable('HorariosRutas')
    await queryInterface.dropTable('HorariosLugares')
    await queryInterface.dropTable('UsuRoles')
    await queryInterface.dropTable('Itinerario')
    await queryInterface.dropTable('Rutas')
    await queryInterface.dropTable('Puntos')
    await queryInterface.dropTable('Lugares')
    await queryInterface.dropTable('Usuarios')
    await queryInterface.dropTable('Roles')
    await queryInterface.dropTable('Choferes')
    await queryInterface.dropTable('Vehiculos')
  }
}

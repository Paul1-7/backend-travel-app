'use strict';

const { RutasSchema } = require("../models/rutas.model");
const { PuntosSchema } = require("../models/puntos.model");
const { LugaresSchema } = require("../models/lugares.model");
const { ReservasSchema } = require("../models/reservas.model");
const { PropuestasSchema } = require("../models/propuestas.model");
const { InfoagenciaSchema } = require("../models/infoagencia.model");
const { InfotarijaSchema } = require("../models/infotarija.model");
const { CalificacionesSchema } = require("../models/calificaciones.model");
const { ContratacionesSchema } = require("../models/contrataciones.model");
const { ImagenesSchema } = require("../models/imagenes.model");
const { UsuariosSchema } = require("../models/usuarios.model");
const { RolesSchema } = require("../models/roles.model");
const { UsurolesSchema } = require("../models/usuroles.model");
const { ItinerarioSchema } = require("../models/itinerario.model");
const { RutacontraSchema } = require("../models/rutacontra.model");
const { RutareservaSchema } = require("../models/rutareserva.model");

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Rutas', RutasSchema);
     await queryInterface.createTable('Contrataciones', ContratacionesSchema);
     await queryInterface.createTable('Lugares', LugaresSchema);
     await queryInterface.createTable('Puntos', PuntosSchema);
     await queryInterface.createTable('Reservas', ReservasSchema);
     await queryInterface.createTable('Propuestas', PropuestasSchema);
     await queryInterface.createTable('Info_agencia', InfoagenciaSchema);
     await queryInterface.createTable('Info_tarija', InfotarijaSchema);
     await queryInterface.createTable('Calificaciones', CalificacionesSchema);
     await queryInterface.createTable('Imagenes', ImagenesSchema);
     await queryInterface.createTable('Usuarios', UsuariosSchema);
     await queryInterface.createTable('Roles', RolesSchema);
     await queryInterface.createTable('UsuRoles', UsurolesSchema);
     await queryInterface.createTable('Itinerario', ItinerarioSchema);
     await queryInterface.createTable('RutaContra', RutacontraSchema);
     await queryInterface.createTable('RutaReserva', RutareservaSchema);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('UsuRoles');
    await queryInterface.dropTable('RutaContra');
    await queryInterface.dropTable('RutaReserva');
    await queryInterface.dropTable('Itinerario');
    await queryInterface.dropTable('Imagenes');
     await queryInterface.dropTable('Rutas');
     await queryInterface.dropTable('Puntos');
     await queryInterface.dropTable('Lugares');
     await queryInterface.dropTable('Reservas');
     await queryInterface.dropTable('Propuestas');
     await queryInterface.dropTable('Info_agencia');
     await queryInterface.dropTable('Info_tarija');
     await queryInterface.dropTable('Calificaciones');
     await queryInterface.dropTable('Contrataciones');   
     await queryInterface.dropTable('Usuarios');
     await queryInterface.dropTable('Roles');

  }
};

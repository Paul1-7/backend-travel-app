const { Rutas, RutasSchema } = require('./rutas.model.js')
const { Puntos, PuntosSchema } = require('./puntos.model.js')
const { Lugares, LugaresSchema } = require('./lugares.model.js')

const { Contratos, ContratosSchema } = require('./contratos.model.js')
const { Usuarios, UsuariosSchema } = require('./usuarios.model.js')
const { Roles, RolesSchema } = require('./roles.model.js')
const { UsuRoles, UsurolesSchema } = require('./usuroles.model.js')
const { Itinerario, ItinerarioSchema } = require('./itinerario.model.js')
const { Choferes, ChoferesSchema } = require('./choferes.model.js')
const {
  PlacesSchedule,
  PlacesScheduleSchema
} = require('./horariosLugares.model.js')
const {
  RoutesSchedule,
  RoutesScheduleSchema
} = require('./horariosRutas.model.js')
const { Vehiculos, VehiculosSchema } = require('./vehiculos.model.js')
const { Asignaciones, AsignacionesSchema } = require('./asignaciones.model.js')
const {
  AsignacionesContratos,
  AsignacionesContratosSchema
} = require('./asignacionesContratos.model.js')
const {
  AsignacionesGuias,
  AsignacionesGuiasSchema
} = require('./asignacionesGuias.model.js')
const {
  AsignacionesVehiculos,
  AsignacionesVehiculosSchema
} = require('./asignacionesVehiculos.model.js')

function setUpModels(sequelize) {
  Vehiculos.init(VehiculosSchema, Vehiculos.config(sequelize))
  Choferes.init(ChoferesSchema, Choferes.config(sequelize))
  Rutas.init(RutasSchema, Rutas.config(sequelize))
  Puntos.init(PuntosSchema, Puntos.config(sequelize))
  PlacesSchedule.init(PlacesScheduleSchema, PlacesSchedule.config(sequelize))
  RoutesSchedule.init(RoutesScheduleSchema, RoutesSchedule.config(sequelize))
  Lugares.init(LugaresSchema, Lugares.config(sequelize))
  Contratos.init(ContratosSchema, Contratos.config(sequelize))
  Usuarios.init(UsuariosSchema, Usuarios.config(sequelize))
  Roles.init(RolesSchema, Roles.config(sequelize))
  UsuRoles.init(UsurolesSchema, UsuRoles.config(sequelize))
  Itinerario.init(ItinerarioSchema, Itinerario.config(sequelize))
  //asignacion
  Asignaciones.init(AsignacionesSchema, Asignaciones.config(sequelize))
  AsignacionesContratos.init(
    AsignacionesContratosSchema,
    AsignacionesContratos.config(sequelize)
  )
  AsignacionesGuias.init(
    AsignacionesGuiasSchema,
    AsignacionesGuias.config(sequelize)
  )
  AsignacionesVehiculos.init(
    AsignacionesVehiculosSchema,
    AsignacionesVehiculos.config(sequelize)
  )

  Choferes.associate(sequelize.models)
  Vehiculos.associate(sequelize.models)
  Contratos.associate(sequelize.models)
  Usuarios.associate(sequelize.models)
  Rutas.associate(sequelize.models)
  Lugares.associate(sequelize.models)
  Puntos.associate(sequelize.models)
  PlacesSchedule.associate(sequelize.models)
  RoutesSchedule.associate(sequelize.models)
  Asignaciones.associate(sequelize.models)
  AsignacionesContratos.associate(sequelize.models)
  AsignacionesGuias.associate(sequelize.models)
  AsignacionesVehiculos.associate(sequelize.models)
}

module.exports = setUpModels

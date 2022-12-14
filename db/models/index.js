const { Rutas, RutasSchema } = require('./rutas.model.js')
const { Puntos, PuntosSchema } = require('./puntos.model.js')
const { Lugares, LugaresSchema } = require('./lugares.model.js')
const { Reservas, ReservasSchema } = require('./reservas.model.js')
const { Propuestas, PropuestasSchema } = require('./propuestas.model.js')
const { Info_agencia, InfoagenciaSchema } = require('./infoagencia.model.js')
const { Info_tarija, InfotarijaSchema } = require('./infotarija.model.js')
const {
  Calificaciones,
  CalificacionesSchema
} = require('./calificaciones.model.js')
const {
  Contrataciones,
  ContratacionesSchema
} = require('./contrataciones.model.js')
const { Imagenes, ImagenesSchema } = require('./imagenes.model.js')
const { Usuarios, UsuariosSchema } = require('./usuarios.model.js')
const { Roles, RolesSchema } = require('./roles.model.js')
const { UsuRoles, UsurolesSchema } = require('./usuroles.model.js')
const { Itinerario, ItinerarioSchema } = require('./itinerario.model.js')
const { RutaContra, RutacontraSchema } = require('./rutacontra.model.js')
const { RutaReserva, RutareservaSchema } = require('./rutareserva.model.js')
const { Programacion, ProgramacionSchema } = require('./programacion.model.js')
const { Dias, DiasSchema } = require('./dias.model.js')
const { Horas, HorasSchema } = require('./horas.model.js')
const {
  HorariosAtencion,
  HorariosAtencionSchema
} = require('./horariosAtencion.model.js')

function setUpModels(sequelize) {
  Horas.init(HorasSchema, Horas.config(sequelize))
  Dias.init(DiasSchema, Dias.config(sequelize))
  Rutas.init(RutasSchema, Rutas.config(sequelize))
  Puntos.init(PuntosSchema, Puntos.config(sequelize))
  Lugares.init(LugaresSchema, Lugares.config(sequelize))
  Reservas.init(ReservasSchema, Reservas.config(sequelize))
  Propuestas.init(PropuestasSchema, Propuestas.config(sequelize))
  Info_agencia.init(InfoagenciaSchema, Info_agencia.config(sequelize))
  Info_tarija.init(InfotarijaSchema, Info_tarija.config(sequelize))
  Calificaciones.init(CalificacionesSchema, Calificaciones.config(sequelize))
  Contrataciones.init(ContratacionesSchema, Contrataciones.config(sequelize))
  Imagenes.init(ImagenesSchema, Imagenes.config(sequelize))
  Usuarios.init(UsuariosSchema, Usuarios.config(sequelize))
  Roles.init(RolesSchema, Roles.config(sequelize))
  UsuRoles.init(UsurolesSchema, UsuRoles.config(sequelize))
  Itinerario.init(ItinerarioSchema, Itinerario.config(sequelize))
  Programacion.init(ProgramacionSchema, Programacion.config(sequelize))
  HorariosAtencion.init(
    HorariosAtencionSchema,
    HorariosAtencion.config(sequelize)
  )

  RutaContra.init(RutacontraSchema, RutaContra.config(sequelize))
  RutaReserva.init(RutareservaSchema, RutaReserva.config(sequelize))

  Contrataciones.associate(sequelize.models)
  Programacion.associate(sequelize.models)
  HorariosAtencion.associate(sequelize.models)
  Reservas.associate(sequelize.models)
  Usuarios.associate(sequelize.models)
  Rutas.associate(sequelize.models)
  Dias.associate(sequelize.models)
  Horas.associate(sequelize.models)
  Lugares.associate(sequelize.models)
  Puntos.associate(sequelize.models)
}

module.exports = setUpModels

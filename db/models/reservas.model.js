const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { CONTRATACIONES_TABLE } = require('./contrataciones.model.js')

const RESERVAS_TABLE = 'Reservas'

const ReservasSchema = {
  CodReserva: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_reserva',
    validate: {
      isUUID: 4
    }
  },
  NombreCliente: {
    type: DataTypes.STRING,
    field: 'nomb_cliente',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  DescripReserva: {
    type: DataTypes.STRING,
    field: 'desc_reserva',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechaReserva: {
    type: DataTypes.STRING,
    field: 'fecha_reserva',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  EstadoReserva: {
    type: DataTypes.INTEGER,
    field: 'estado_reserva',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  },
  CodContra: {
    type: DataTypes.STRING,
    field: 'cod_contra',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
  },
  references: {
    model: CONTRATACIONES_TABLE,
    key: 'cod_contra'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
   } 
}

class Reservas extends Model {
  static associate(models) {
  //  this.hasMany(models.Productos, { foreignKey: 'id_cat' })
  this.belongsTo(models.Contrataciones)
  this.belongsToMany(models.Rutas, { //muchos a muchos
    through: models.RutaReserva,
    as: 'rutas',
    foreignKey: 'CodReserva',
    otherKey: 'CodRuta'
  })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVAS_TABLE,
      modelName: RESERVAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Reservas, ReservasSchema,  RESERVAS_TABLE }

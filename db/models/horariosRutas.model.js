const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const ROUTES_SCHEDULE_TABLE = 'HorariosRutas'

const RoutesScheduleSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idRuta: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'id_ruta',
    references: {
      model: RUTAS_TABLE,
      key: 'id'
    },
    validate: {
      isUUID: 4
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  horarioEntrada: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'horario_entrada'
  },
  horarioSalida: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'horario_salida'
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class RoutesSchedule extends Model {
  static associate(models) {
    this.belongsTo(models.Rutas, { as: 'ruta', foreignKey: 'idRuta' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROUTES_SCHEDULE_TABLE,
      modelName: ROUTES_SCHEDULE_TABLE,
      timestamps: false
    }
  }
}

module.exports = { RoutesSchedule, RoutesScheduleSchema, ROUTES_SCHEDULE_TABLE }

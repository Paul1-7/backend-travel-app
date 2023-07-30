const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { LUGARES_TABLE } = require('./lugares.model.js')

const PLACES_SCHEDULE_TABLE = 'HorariosLugares'

const PlacesScheduleSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idLugar: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'id_lugar',
    references: {
      model: LUGARES_TABLE,
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

class PlacesSchedule extends Model {
  static associate(models) {
    this.belongsTo(models.Lugares, { as: 'lugar', foreignKey: 'idLugar' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLACES_SCHEDULE_TABLE,
      modelName: PLACES_SCHEDULE_TABLE,
      timestamps: false
    }
  }
}

module.exports = { PlacesSchedule, PlacesScheduleSchema, PLACES_SCHEDULE_TABLE }

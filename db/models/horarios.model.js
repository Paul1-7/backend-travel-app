const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const HORARIOS_TABLE = 'Horarios'

const HorariosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  horaInicio: {
    type: DataTypes.TIME,
    field: 'hora_inicio',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  horaFin: {
    type: DataTypes.TIME,
    field: 'hora_fin',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  }
}

class Horarios extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: HORARIOS_TABLE,
      modelName: HORARIOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Horarios, HorariosSchema, HORARIOS_TABLE }

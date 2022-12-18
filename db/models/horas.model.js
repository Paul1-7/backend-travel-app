const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const HORAS_TABLE = 'Horas'

const HorasSchema = {
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
  },
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: msg.isNumeric,
      notNull: msg.notNull
    }
  }
}

class Horas extends Model {
  static associate(models) {
    this.hasMany(models.Programacion, {
      as: 'programacion',
      foreignKey: 'idHora'
    })
    this.hasMany(models.Horarios_Atencion, {
      as: 'horarios',
      foreignKey: 'idHora'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HORAS_TABLE,
      modelName: HORAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Horas, HorasSchema, HORAS_TABLE }

const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const DIAS_TABLE = 'Dias'

const DiasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  }
}

class Dias extends Model {
  static associate(models) {
    this.hasMany(models.Programacion, {
      as: 'programacion',
      foreignKey: 'idDia'
    })
    this.hasMany(models.Horarios_Atencion, {
      as: 'horarios',
      foreignKey: 'idDia'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DIAS_TABLE,
      modelName: DIAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Dias, DiasSchema, DIAS_TABLE }

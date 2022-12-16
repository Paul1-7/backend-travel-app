const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { DIAS_TABLE } = require('./dias.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const DIAS_RUTAS_TABLE = 'Dias_Rutas'

const DiasRutasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idDia: {
    type: DataTypes.STRING,
    field: 'id_dia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: DIAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idRuta: {
    type: DataTypes.STRING,
    field: 'id_ruta',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: RUTAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class DiasRutas extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: DIAS_RUTAS_TABLE,
      modelName: DIAS_RUTAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { DiasRutas, DiasRutasSchema, DIAS_RUTAS_TABLE }

const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { LUGARES_TABLE } = require('./lugares.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const ITINERARIO_TABLE = 'Itinerario'

const ItinerarioSchema = {
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
  },
  idLugar: {
    type: DataTypes.STRING,
    field: 'id_lugar',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: LUGARES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Itinerario extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ITINERARIO_TABLE,
      modelName: ITINERARIO_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Itinerario, ItinerarioSchema, ITINERARIO_TABLE }

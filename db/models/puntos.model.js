const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { LUGARES_TABLE } = require('./lugares.model.js')

const PUNTOS_TABLE = 'Puntos'

const PuntosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: msg.isFloat,
      notNull: msg.notNull
    }
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: msg.isFloat,
      notNull: msg.notNull
    }
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

class Puntos extends Model {
  static associate(models) {
    //  this.hasMany(models.Productos, { foreignKey: 'id_cat' })
    this.belongsTo(models.Lugares, { as: 'Lugar', foreignKey: 'idLugar' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PUNTOS_TABLE,
      modelName: PUNTOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Puntos, PuntosSchema, PUNTOS_TABLE }

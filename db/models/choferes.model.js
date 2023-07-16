const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const CHOFERES_TABLE = 'Choferes'

const ChoferesSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  nombreChofer: {
    type: DataTypes.STRING,
    field: 'nombre_chofer',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  apellidoChofer: {
    type: DataTypes.STRING,
    field: 'apellido_chofer',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  auto: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: msg.isNumeric,
      notNull: msg.notNull
    }
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  },
  borrado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}

class Choferes extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CHOFERES_TABLE,
      modelName: CHOFERES_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Choferes, ChoferesSchema, CHOFERES_TABLE }

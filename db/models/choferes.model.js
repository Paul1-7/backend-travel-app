const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { VEHICULOS_TABLE } = require('./vehiculos.model.js')

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
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  numLicencia: {
    type: DataTypes.STRING,
    field: 'num_licencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  borrado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  idVehiculo: {
    type: DataTypes.STRING,
    field: 'id_vehiculo',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: VEHICULOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Choferes extends Model {
  static associate(models) {
    this.belongsTo(models.Vehiculos, {
      as: 'vehiculo',
      foreignKey: 'idVehiculo'
    })
  }

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

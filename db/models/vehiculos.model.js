const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const VEHICULOS_TABLE = 'Vehiculos'

const VehiculosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  placa: {
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
  borrado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}

class Vehiculos extends Model {
  static associate(models) {
    this.hasMany(models.Choferes, {
      foreignKey: 'idVehiculo',
      as: 'vehiculos'
    })

    this.hasMany(models.AsignacionesVehiculos, {
      foreignKey: 'idVehiculo',
      as: 'asignaciones'
    })

    this.belongsToMany(models.Asignaciones, {
      through: models.AsignacionesVehiculos,
      as: 'asignaciones2',
      foreignKey: 'idVehiculo',
      otherKey: 'idAsignacion'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VEHICULOS_TABLE,
      modelName: VEHICULOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Vehiculos, VehiculosSchema, VEHICULOS_TABLE }

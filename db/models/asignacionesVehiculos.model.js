const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { ASIGNACIONES_TABLE } = require('./asignaciones.model.js')
const { VEHICULOS_TABLE } = require('./vehiculos.model.js')

const ASIGNACIONES_VEHICULOS_TABLE = 'AsignacionesVehiculos'

const AsignacionesVehiculosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
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
  },
  idAsignacion: {
    type: DataTypes.STRING,
    field: 'id_asignacion',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: ASIGNACIONES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AsignacionesVehiculos extends Model {
  static associate(models) {
    this.belongsTo(models.Asignaciones, {
      as: 'asignacion',
      foreignKey: 'idAsignacion'
    })
    this.belongsTo(models.Vehiculos, {
      as: 'vehiculo',
      foreignKey: 'idVehiculo'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNACIONES_VEHICULOS_TABLE,
      modelName: ASIGNACIONES_VEHICULOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  AsignacionesVehiculos,
  AsignacionesVehiculosSchema,
  ASIGNACIONES_VEHICULOS_TABLE
}

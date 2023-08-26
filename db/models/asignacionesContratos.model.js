const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { CONTRATOS_TABLE } = require('./contratos.model.js')
const { ASIGNACIONES_TABLE } = require('./asignaciones.model.js')

const ASIGNACIONES_CONTRATOS_TABLE = 'AsignacionesContratos'

const AsignacionesContratosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  idContrato: {
    type: DataTypes.STRING,
    field: 'id_contrato',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: CONTRATOS_TABLE,
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

class AsignacionesContratos extends Model {
  static associate(models) {
    this.belongsTo(models.Asignaciones, {
      as: 'asignacion',
      foreignKey: 'idAsignacion'
    })
    this.belongsTo(models.Contratos, {
      as: 'contrato',
      foreignKey: 'idContrato'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNACIONES_CONTRATOS_TABLE,
      modelName: ASIGNACIONES_CONTRATOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  AsignacionesContratos,
  AsignacionesContratosSchema,
  ASIGNACIONES_CONTRATOS_TABLE
}

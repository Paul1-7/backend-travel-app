const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { ASIGNACIONES_TABLE } = require('./asignaciones.model.js')
const { USUARIOS_TABLE } = require('./usuarios.model.js')

const ASIGNACIONES_GUIAS_TABLE = 'AsignacionesGuias'

const AsignacionesGuiasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  idGuia: {
    type: DataTypes.STRING,
    field: 'id_guia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: USUARIOS_TABLE,
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

class AsignacionesGuias extends Model {
  static associate(models) {
    this.belongsTo(models.Asignaciones, {
      as: 'asignacion',
      foreignKey: 'idAsignacion'
    })
    this.belongsTo(models.Usuarios, {
      as: 'guia',
      foreignKey: 'idGuia'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNACIONES_GUIAS_TABLE,
      modelName: ASIGNACIONES_GUIAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  AsignacionesGuias,
  AsignacionesGuiasSchema,
  ASIGNACIONES_GUIAS_TABLE
}

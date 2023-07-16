const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { ROLES_TABLE } = require('./roles.model.js')
const { USUARIOS_TABLE } = require('./usuarios.model.js')

const USUROLES_TABLE = 'UsuRoles'

const UsurolesSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idUsuario: {
    type: DataTypes.STRING,
    field: 'id_usuario',
    validate: {
      is: msg.isAlphanumeric
    },
    references: {
      model: USUARIOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idRol: {
    type: DataTypes.STRING,
    field: 'id_rol',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: ROLES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}

class UsuRoles extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUROLES_TABLE,
      modelName: USUROLES_TABLE,
      timestamps: false
    }
  }
}

module.exports = { UsuRoles, UsurolesSchema, USUROLES_TABLE }

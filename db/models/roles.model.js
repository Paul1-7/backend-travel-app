const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const ROLES_TABLE = 'Roles'

const RolesSchema = {
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
    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
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
  }
}

class Roles extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLES_TABLE,
      modelName: ROLES_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Roles, RolesSchema, ROLES_TABLE }

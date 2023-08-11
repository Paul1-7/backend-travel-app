const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const USUARIOS_TABLE = 'Usuarios'

const UsuariosSchema = {
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
  usuario: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
    validate: {
      is: msg.isAlphanumeric
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: msg.isAlphanumeric
    }
  },
  ci: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
  }
}

class Usuarios extends Model {
  static associate(models) {
    this.belongsToMany(models.Roles, {
      //muchos a muchos
      through: models.UsuRoles,
      as: 'roles',
      foreignKey: 'idUsuario',
      otherKey: 'idRol'
    })

    this.hasMany(models.Contratos, {
      foreignKey: 'idCliente',
      as: 'clienteContr',
      sourceKey: 'id'
    })

    this.hasMany(models.Contratos, {
      foreignKey: 'idEmpleado',
      as: 'empleadoContr',
      sourceKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIOS_TABLE,
      modelName: USUARIOS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Usuarios, UsuariosSchema, USUARIOS_TABLE }

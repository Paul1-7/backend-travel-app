const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { RUTAS_TABLE } = require('./rutas.model.js')
const { USUARIOS_TABLE } = require('./usuarios.model.js')

const CONTRATOS_TABLE = 'Contratos'

const ContratosSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },

  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  cantidadPersonas: {
    type: DataTypes.STRING,
    field: 'cantidad_personas',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: msg.notNull
    }
  },
  idioma: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  estado: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'Pendiente'
  },
  idCliente: {
    type: DataTypes.STRING,
    field: 'id_cliente',
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
  idEmpleado: {
    type: DataTypes.STRING,
    field: 'id_cliente',
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
  idRuta: {
    type: DataTypes.STRING,
    field: 'id_ruta',
    allowNull: false,
    validate: {
      isUUID: 4
    },
    references: {
      model: RUTAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Contratos extends Model {
  static associate(models) {
    this.belongsTo(models.Rutas, {
      as: 'ruta',
      foreignKey: 'idRuta'
    })

    this.belongsTo(models.Usuarios, {
      as: 'cliente',
      foreignKey: 'idCliente',
      targetKey: 'id'
    })

    this.belongsTo(models.Usuarios, {
      as: 'empleado',
      foreignKey: 'idEmpleado',
      targetKey: 'id'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRATOS_TABLE,
      modelName: CONTRATOS_TABLE,
      timestamps: false,
      freezeTableName: true
    }
  }
}

module.exports = {
  Contratos,
  ContratosSchema,
  CONTRATOS_TABLE
}

const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const CONTRATACIONES_TABLE = 'Contrataciones'

const ContratacionesSchema = {
  CodContra: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_contra',
    validate: {
      isUUID: 4
    }
  },
  NombresIntegrantes: {
    type: DataTypes.STRING,
    field: 'nomb_integrantes',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  MontoContra: {
    type: DataTypes.STRING,
    field: 'monto_contra',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  MetodoPago: {
    type: DataTypes.STRING,
    field: 'metodo_pago',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechaContra: {
    type: DataTypes.STRING,
    field: 'fecha_contra',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  EstadoContra: {
    type: DataTypes.INTEGER,
    field: 'estado_contra',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class Contrataciones extends Model {
  static associate(models) {
    this.belongsToMany(models.Rutas, {
      //muchos a muchos
      through: models.RutaContra,
      as: 'rutas',
      foreignKey: 'CodContra',
      otherKey: 'CodRuta'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRATACIONES_TABLE,
      modelName: CONTRATACIONES_TABLE,
      timestamps: false,
      freezeTableName: true
    }
  }
}

module.exports = { Contrataciones, ContratacionesSchema, CONTRATACIONES_TABLE }

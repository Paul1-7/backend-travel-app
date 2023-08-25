const { Model, DataTypes, Sequelize } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const RUTAS_TABLE = 'Rutas'

const RutasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  titulo: {
    type: DataTypes.STRING,

    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  descripcion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  duracion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  precio: {
    type: DataTypes.FLOAT,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  borrado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}

class Rutas extends Model {
  static associate(models) {
    this.belongsToMany(models.Lugares, {
      through: models.Itinerario,
      as: 'itinerarios',
      foreignKey: 'idRuta',
      otherKey: 'idLugar'
    })

    this.hasMany(models.HorariosRutas, {
      foreignKey: 'idRuta',
      as: 'horariosRuta'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RUTAS_TABLE,
      modelName: RUTAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Rutas, RutasSchema, RUTAS_TABLE }

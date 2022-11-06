const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { PUNTOS_TABLE } = require('./puntos.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const ITINERARIO_TABLE = 'Itinerario'

const ItinerarioSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  idRuta: {
    type: DataTypes.STRING,
    field: 'id_ruta',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: RUTAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idPunto: {
    type: DataTypes.STRING,
    field: 'id_punto',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: PUNTOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  descripcion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  horaInicio: {
    type: DataTypes.STRING,
    field: 'hora_inicio',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  horaFin: {
    type: DataTypes.STRING,
    field: 'hora_fin',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  }
}

class Itinerario extends Model {
  static associate(models) {
    //this.hasMany(models.Productos, { foreignKey: 'id_cat' }) uno a muchos
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ITINERARIO_TABLE,
      modelName: ITINERARIO_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Itinerario, ItinerarioSchema, ITINERARIO_TABLE }

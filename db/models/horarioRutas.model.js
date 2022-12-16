const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { HORARIOS_TABLE } = require('./horarios.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const HORARIOS_RUTAS_TABLE = 'Horarios_Rutas'

const HorariosRutasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idHorario: {
    type: DataTypes.STRING,
    field: 'id_horario',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: HORARIOS_TABLE,
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
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: RUTAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class HorariosRutas extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: HORARIOS_RUTAS_TABLE,
      modelName: HORARIOS_RUTAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { HorariosRutas, HorariosRutasSchema, HORARIOS_RUTAS_TABLE }

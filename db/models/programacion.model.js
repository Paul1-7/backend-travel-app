const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { DIAS_TABLE } = require('./dias.model.js')
const { HORAS_TABLE } = require('./horas.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const PROGRAMACION_TABLE = 'Programacion'

const ProgramacionSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: 4
    }
  },
  idDia: {
    type: DataTypes.STRING,
    field: 'id_dia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: DIAS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idHora: {
    type: DataTypes.STRING,
    field: 'id_hora',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: HORAS_TABLE,
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

class Programacion extends Model {
  static associate(models) {
    this.belongsTo(models.Dias, {
      as: 'dia',
      foreignKey: 'idDia'
    })
    this.belongsTo(models.Horas, {
      as: 'horas',
      foreignKey: 'idHora'
    })
    this.belongsTo(models.Rutas, {
      as: 'ruta',
      foreignKey: 'idRuta'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROGRAMACION_TABLE,
      modelName: PROGRAMACION_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Programacion, ProgramacionSchema, PROGRAMACION_TABLE }

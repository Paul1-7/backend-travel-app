const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { DIAS_TABLE } = require('./dias.model.js')
const { HORAS_TABLE } = require('./horas.model.js')
const { LUGARES_TABLE } = require('./lugares.model.js')

const HORARIOS_ATENCION_TABLE = 'Horarios_Atencion'

const HorariosAtencionSchema = {
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
  idLugar: {
    type: DataTypes.STRING,
    field: 'id_lugar',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    },
    references: {
      model: LUGARES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class HorariosAtencion extends Model {
  static associate(models) {
    this.belongsTo(models.Dias, {
      as: 'dia',
      foreignKey: 'idDia'
    })
    this.belongsTo(models.Horas, {
      as: 'horas',
      foreignKey: 'idHora'
    })
    this.belongsTo(models.Lugares, {
      as: 'lugares',
      foreignKey: 'idLugar'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HORARIOS_ATENCION_TABLE,
      modelName: HORARIOS_ATENCION_TABLE,
      timestamps: false
    }
  }
}

module.exports = {
  HorariosAtencion,
  HorariosAtencionSchema,
  HORARIOS_ATENCION_TABLE
}

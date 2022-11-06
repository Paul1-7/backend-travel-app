const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { CONTRATACIONES_TABLE } = require('./contrataciones.model.js')

const CALIFICACIONES_TABLE = 'Calificaciones'

const CalificacionesSchema = {
  CodCalif: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_calif',
    validate: {
      isUUID: 4
    }
  },
  PuntajeCalif: {
    type: DataTypes.STRING,
    field: 'puntaje_calif',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  ComentarioCalif: {
    type: DataTypes.STRING,
    field: 'coment_calif',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechaCalif: {
    type: DataTypes.STRING,
    field: 'fecha_calif',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  CodContra: {
    type: DataTypes.STRING,
    field: 'cod_contra',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
  },
  references: {
    model: CONTRATACIONES_TABLE,
    key: 'cod_contra'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
   } 
  
}

class Calificaciones extends Model {
  static associate(models) {
  //  this.hasMany(models.Productos, { foreignKey: 'id_cat' })
  this.belongsTo(models.Contrataciones)
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CALIFICACIONES_TABLE,
      modelName: CALIFICACIONES_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Calificaciones, CalificacionesSchema,  CALIFICACIONES_TABLE }

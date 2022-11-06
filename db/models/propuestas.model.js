const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const PROPUESTAS_TABLE = 'Propuestas'

const PropuestasSchema = {
  CodPropuesta: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_propu',
    validate: {
      isUUID: 4
    }
  },
  FechaPropuesta: {
    type: DataTypes.STRING,
    field: 'fecha_propu',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  DescripPropuesta: {
    type: DataTypes.STRING,
    field: 'desc_propu',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  DatosUsuPropuesta: {
    type: DataTypes.STRING,
    field: 'datos_usu_propu',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  }
  
}

class Propuestas extends Model {
  static associate(models) {
  //  this.hasMany(models.Productos, { foreignKey: 'id_cat' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROPUESTAS_TABLE,
      modelName: PROPUESTAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Propuestas, PropuestasSchema,  PROPUESTAS_TABLE }

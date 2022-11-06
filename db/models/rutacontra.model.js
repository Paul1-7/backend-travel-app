const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { CONTRATACIONES_TABLE } = require('./contrataciones.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')

const RUTACONTRA = 'RutaContra'

const RutacontraSchema = {
  IdCRutaContra: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'id_rutacontra',
    validate: {
      isUUID: 4
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
   } ,
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

class RutaContra extends Model {
  static associate(models) {
   //this.hasMany(models.Productos, { foreignKey: 'id_cat' }) uno a muchos
   
   
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RUTACONTRA,
      modelName: RUTACONTRA,
      timestamps: false
    }
  }
}

module.exports = {  RutaContra, RutacontraSchema,  RUTACONTRA }

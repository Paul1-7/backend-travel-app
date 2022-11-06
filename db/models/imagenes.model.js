const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { INFOAGENCIA_TABLE } = require('./infoagencia.model.js')
const { INFOTARIJA_TABLE } = require('./infotarija.model.js')
const { LUGARES_TABLE } = require('./lugares.model.js')

const IMAGENES_TABLE = 'Imagenes'

const ImagenesSchema = {
  CodImagen: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_imagen',
    validate: {
      isUUID: 4
    }
  },
  TituloImagen: {
    type: DataTypes.STRING,
    field: 'titulo_imagen',
    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  Foto: {
    type: DataTypes.STRING,
    field: 'foto',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  EstadoImagen: {
    type: DataTypes.INTEGER,
    field: 'estado_imagen',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
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
   } ,
   CodInf: {
    type: DataTypes.STRING,
    field: 'cod_info',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
  },
  references: {
    model: INFOAGENCIA_TABLE,
    key: 'cod_info'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
   }  ,
   CodInfo: {
    type: DataTypes.STRING,
    field: 'cod_infor',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
  },
  references: {
    model: INFOTARIJA_TABLE,
    key: 'cod_infor'
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
   }    
}

class Imagenes extends Model {
  static associate(models) {
  //  this.hasMany(models.Productos, { foreignKey: 'id_cat' })
  this.belongsTo(models.Lugares)
  this.belongsTo(models.Info_agencia)
  this.belongsTo(models.Info_tarija)
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: IMAGENES_TABLE,
      modelName: IMAGENES_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Imagenes, ImagenesSchema,  IMAGENES_TABLE }

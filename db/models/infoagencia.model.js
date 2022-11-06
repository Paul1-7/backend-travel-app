const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const INFOAGENCIA_TABLE = 'Info_agencia'

const InfoagenciaSchema = {
  CodInf: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_info',
    validate: {
      isUUID: 4
    }
  },
  DescripcionAgencia: {
    type: DataTypes.STRING,
    field: 'desc_agencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechaPublicacion: {
    type: DataTypes.STRING,
    field: 'fecha_publi',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  MisionAgencia: {
    type: DataTypes.STRING,
    field: 'mision_agencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  VisionAgencia: {
    type: DataTypes.STRING,
    field: 'vision_agencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  UbicacionAgen: {
    type: DataTypes.STRING,
    field: 'ubi_agencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  ContactosAgen: {
    type: DataTypes.STRING,
    field: 'contac_agencia',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  EstadoInf: {
    type: DataTypes.INTEGER,
    field: 'estado_info',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class Info_agencia extends Model {
  static associate(models) {
      this.hasMany(models.Imagenes, { foreignKey: 'cod_info' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INFOAGENCIA_TABLE,
      modelName: INFOAGENCIA_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Info_agencia, InfoagenciaSchema,  INFOAGENCIA_TABLE }

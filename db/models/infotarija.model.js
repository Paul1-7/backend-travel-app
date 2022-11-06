const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const INFOTARIJA_TABLE = 'Info_tarija'

const InfotarijaSchema = {
  CodInfo: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'cod_infor',
    validate: {
      isUUID: 4
    }
  },
  DescripcionTarija: {
    type: DataTypes.STRING,
    field: 'desc_tarija',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  UbicacionTarija: {
    type: DataTypes.STRING,
    field: 'ubi_tarija',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechasCivicas: {
    type: DataTypes.STRING,
    field: 'fechas_civicas',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  CapitalTarija: {
    type: DataTypes.STRING,
    field: 'capital_tarija',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  ProvinciasTarija: {
    type: DataTypes.STRING,
    field: 'provincias_tarija',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  FechaPublic: {
    type: DataTypes.STRING,
    field: 'fecha_public',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  EstadoInfo: {
    type: DataTypes.INTEGER,
    field: 'estado_infor',
    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class Info_tarija extends Model {
  static associate(models) {
      this.hasMany(models.Imagenes, { foreignKey: 'cod_infor' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INFOTARIJA_TABLE,
      modelName: INFOTARIJA_TABLE,
      timestamps: false
    }
  }
}

module.exports = {  Info_tarija, InfotarijaSchema,  INFOTARIJA_TABLE }

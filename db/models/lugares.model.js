const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const LUGARES_TABLE = 'Lugares'

const LugaresSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  nombre: {
    type: DataTypes.STRING,

    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  direccion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  estado: {
    type: DataTypes.INTEGER,

    allowNull: false,
    defaultValue: 1,
    validate: {
      is: msg.isState
    }
  }
}

class Lugares extends Model {
  static associate(models) {
    this.hasMany(models.Puntos, { foreignKey: 'idLugar', as: 'punto' })

    this.hasMany(models.Horarios_Atencion, {
      as: 'horariosAtencion',
      foreignKey: 'idLugar'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LUGARES_TABLE,
      modelName: LUGARES_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Lugares, LugaresSchema, LUGARES_TABLE }

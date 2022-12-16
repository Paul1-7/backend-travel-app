const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const RUTAS_TABLE = 'Rutas'

const RutasSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  titulo: {
    type: DataTypes.STRING,

    unique: true,
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  descripcion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  duracion: {
    type: DataTypes.STRING,

    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
    }
  },
  precio: {
    type: DataTypes.FLOAT,

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

class Rutas extends Model {
  static associate(models) {
    this.belongsToMany(models.Lugares, {
      through: models.Itinerario,
      as: 'itinerarios',
      foreignKey: 'idRuta',
      otherKey: 'idLugar'
    })

    this.belongsToMany(models.Dias, {
      through: models.Dias_Rutas,
      as: 'dias',
      foreignKey: 'idRuta',
      otherKey: 'idDia'
    })

    this.belongsToMany(models.Horarios, {
      through: models.Horarios_Rutas,
      as: 'horarios',
      foreignKey: 'idRuta',
      otherKey: 'idHorario'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RUTAS_TABLE,
      modelName: RUTAS_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Rutas, RutasSchema, RUTAS_TABLE }

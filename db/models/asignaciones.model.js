const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')

const ASIGNACIONES_TABLE = 'Asignaciones'

const AsignacionesSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,

    validate: {
      isUUID: 4
    }
  },
  codReferencia: {
    allowNull: false,
    comment: 'codigo de referencia para las asignaciones',
    type: DataTypes.STRING,
    field: 'cod_referencia'
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: msg.notNull
    }
  },
  totalPersonas: {
    type: DataTypes.INTEGER,
    field: 'total_personas',
    allowNull: false,
    validate: {
      notNull: msg.notNull
    }
  },
  capMaxPersonas: {
    type: DataTypes.INTEGER,
    field: 'cap_max_personas',

    allowNull: false,
    validate: {
      notNull: msg.notNull
    }
  }
}

class Asignaciones extends Model {
  static associate(models) {
    this.hasMany(models.AsignacionesContratos, {
      foreignKey: 'idAsignacion',
      as: 'contratos'
    })

    this.hasMany(models.AsignacionesGuias, {
      foreignKey: 'idAsignacion',
      as: 'guias'
    })

    this.hasMany(models.AsignacionesVehiculos, {
      foreignKey: 'idAsignacion',
      as: 'vehiculos'
    })

    this.belongsToMany(models.Contratos, {
      through: models.AsignacionesContratos,
      as: 'asigCont',
      foreignKey: 'idAsignacion',
      otherKey: 'idContrato'
    })

    this.belongsToMany(models.Usuarios, {
      through: models.AsignacionesGuias,
      as: 'asigGuias',
      foreignKey: 'idAsignacion',
      otherKey: 'idGuia'
    })

    this.belongsToMany(models.Vehiculos, {
      through: models.AsignacionesVehiculos,
      as: 'asigVeh',
      foreignKey: 'idAsignacion',
      otherKey: 'idVehiculo'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASIGNACIONES_TABLE,
      modelName: ASIGNACIONES_TABLE,
      timestamps: false
    }
  }
}

module.exports = { Asignaciones, AsignacionesSchema, ASIGNACIONES_TABLE }

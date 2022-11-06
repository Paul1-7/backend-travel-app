const { Model, DataTypes } = require('sequelize')
const msg = require('../../utils/validationsMsg.js')
const { RESERVAS_TABLE } = require('./reservas.model.js')
const { RUTAS_TABLE } = require('./rutas.model.js')


const RUTARESERVA = 'RutaReserva'

const RutareservaSchema = {
  IdCRutaReserva: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    field: 'id_rutareserva',
    validate: {
      isUUID: 4
    }
  },
  CodReserva: {
    type: DataTypes.STRING,
    field: 'cod_reserva',
    allowNull: false,
    validate: {
      is: msg.isAlphanumeric,
      notNull: msg.notNull
  },
  references: {
    model: RESERVAS_TABLE,
    key: 'cod_reserva'
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

class RutaReserva extends Model {
  static associate(models) {
   //this.hasMany(models.Productos, { foreignKey: 'id_cat' }) uno a muchos
   
   
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RUTARESERVA,
      modelName: RUTARESERVA,
      timestamps: false
    }
  }
}

module.exports = {  RutaReserva, RutareservaSchema,  RUTARESERVA }

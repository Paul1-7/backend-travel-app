const { models } = require('../libs/sequelize.js')

async function ListarRutas() {
  return await models.Rutas.findAll({
    include: ['itinerarios']
  })
}

async function BuscarRutas(id) {
  return await models.Rutas.findByPk(id, {
    include: [
      'itinerarios',
      {
        model: models.Dias,
        as: 'dias',
        through: {
          attributes: []
        }
      },
      {
        model: models.Horarios,
        as: 'horarios',
        through: {
          attributes: []
        }
      }
    ]
  })
}

async function AgregarRutas(ruta) {
  return await models.Rutas.create(ruta)
}

async function ModificarRutas(id, cambio) {
  const user = await models.Rutas.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarRutas(id) {
  const user = await models.Rutas.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarRutas,
  BuscarRutas,
  AgregarRutas,
  ModificarRutas,
  EliminarRutas
}

const { models } = require('../libs/sequelize.js')

async function ListarRutas() {
  return await models.Rutas.findAll({
    include: ['itinerarios'],
    where: {
      borrado: false
    }
  })
}

async function BuscarRutas(id) {
  return await models.Rutas.findOne({
    include: [
      'itinerarios',
      {
        model: models.Programacion,
        as: 'programacion',
        attributes: {
          exclude: ['idDia', 'idHora', 'idRuta']
        },
        include: [
          {
            model: models.Dias,
            as: 'dia',
            attributes: {
              exclude: ['id']
            }
          },
          {
            model: models.Horas,
            as: 'horas',
            attributes: {
              exclude: ['id']
            }
          }
        ]
      }
    ],
    where: {
      borrado: false,
      id
    }
  })
}

async function AgregarRutas(ruta, options = {}) {
  return await (await models.Rutas.create(ruta, options)).toJSON()
}

async function ModificarRutas(id, data, options = {}) {
  const result = await models.Rutas.update(data, {
    where: { id },
    ...options
  })

  return result[0] > 0
}

async function EliminarRutas(id, options = {}) {
  const result = await models.Rutas.update(
    { borrado: true },
    {
      where: { id },
      ...options
    }
  )

  return result[0] > 0
}

module.exports = {
  ListarRutas,
  BuscarRutas,
  AgregarRutas,
  ModificarRutas,
  EliminarRutas
}

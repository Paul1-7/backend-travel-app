const { models } = require('../libs/sequelize.js')

async function ListarRutas() {
  return await models.Rutas.findAll({
    include: [
      {
        model: models.Lugares,
        as: 'itinerarios',
        where: { borrado: false },
        include: [
          {
            model: models.HorariosLugares,
            as: 'horariosLugar'
          }
        ]
      }
    ],
    where: {
      borrado: false
    }
  })
}

async function ListarRutasConHorarios() {
  return await models.Rutas.findAll({
    include: [
      {
        model: models.Lugares,
        as: 'itinerarios',
        where: { borrado: false },
        include: [
          {
            model: models.HorariosLugares,
            as: 'horariosLugar'
          }
        ]
      },
      {
        model: models.HorariosRutas,
        as: 'horariosRuta',
        where: { estado: 1 }
      }
    ],
    where: {
      borrado: false
    }
  })
}

async function BuscarRutas(id) {
  return await models.Rutas.findOne({
    include: [
      {
        model: models.Lugares,
        as: 'itinerarios',
        include: [{ model: models.Puntos, as: 'punto' }]
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
  EliminarRutas,
  ListarRutasConHorarios
}

const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarLugares() {
  return await models.Lugares.findAll({
    include: ['punto'],
    where: {
      borrado: false
    }
  })
}

async function BuscarLugares(id) {
  return await models.Lugares.findByPk(id, {
    include: [
      'punto',
      {
        model: models.Horarios_Atencion,
        as: 'horariosAtencion',
        attributes: {
          exclude: ['idDia', 'idHora', 'idLugar']
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
    ]
  })
}

async function AgregarLugares(lugar, options = {}) {
  return await models.Lugares.create(lugar, options)
}

async function ModificarLugares(id, data, options = {}) {
  const result = await models.Lugares.update(data, {
    where: { id },
    ...options
  })

  return result[0] > 0
}

async function EliminarLugares(id, options) {
  const result = await models.Lugares.update(
    { borrado: true },
    {
      where: { id },
      ...options
    }
  )

  return result[0] > 0
}

async function BuscarLugaresPorIds(ids) {
  return await models.Lugares.findAll({
    where: {
      id: { [Op.in]: ids }
    }
  })
}

module.exports = {
  ListarLugares,
  BuscarLugares,
  AgregarLugares,
  ModificarLugares,
  EliminarLugares,
  BuscarLugaresPorIds
}

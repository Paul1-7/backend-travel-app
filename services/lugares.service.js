const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarLugares() {
  return await models.Lugares.findAll()
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

async function AgregarLugares(lugar) {
  return await models.Lugares.create(lugar)
}

async function ModificarLugares(id, cambio) {
  const user = await models.Lugares.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarLugares(id) {
  const user = await models.Lugares.findByPk(id)
  return await user?.destroy()
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

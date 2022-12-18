const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarHoras(tipo) {
  const options = tipo
    ? {
        where: {
          tipo
        },
        attributes: {
          exclude: ['tipo']
        }
      }
    : {}

  return await models.Horas.findAll(options)
}

async function BuscarHorasPorIds(ids) {
  return (await models.Horas.findAll({ where: { id: { [Op.in]: ids } } })).map(
    (item) => item.toJSON()
  )
}

module.exports = {
  ListarHoras,
  BuscarHorasPorIds
}

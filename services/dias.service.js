const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarDias() {
  return await models.Dias.findAll()
}

async function BuscarDiasPorIds(ids) {
  return (await models.Dias.findAll({ where: { id: { [Op.in]: ids } } })).map(
    (item) => item.toJSON()
  )
}

module.exports = {
  ListarDias,
  BuscarDiasPorIds
}

const { models } = require('../libs/sequelize.js')

async function ListarDias() {
  return await models.Dias.findAll()
}

module.exports = {
  ListarDias
}

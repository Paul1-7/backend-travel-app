const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function AgregarItinerario(data, options = {}) {
  return await models.Itinerario.bulkCreate(data, options)
}

async function EliminarItinerarioPorIdRuta(idRuta, options = {}) {
  return await models.Itinerario.destroy({
    where: {
      idRuta
    },
    ...options
  })
}

async function ModificarItinerario(idRuta, data, options = {}) {
  await EliminarItinerarioPorIdRuta(idRuta, options)
  await models.Itinerario.bulkCreate(data, options)
}

async function getProductsBySubsidiariesId(id) {
  return await models.Sucursales_Productos.findAll({
    where: {
      idSuc: id
    }
  })
}

module.exports = {
  AgregarItinerario,

  getProductsBySubsidiariesId,
  EliminarItinerarioPorIdRuta,
  ModificarItinerario
}

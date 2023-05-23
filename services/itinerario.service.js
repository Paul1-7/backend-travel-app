const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function AgregarItinerario(data) {
  return await models.Itinerario.bulkCreate(data)
}

async function EliminarItinerarioPorIdRuta(idRuta) {
  return await models.Itinerario.destroy({
    where: {
      idRuta
    }
  })
}

async function ModificarItinerario(CodRuta, data) {
  const removed = await EliminarItinerarioPorIdRuta(CodRuta)
  const result = removed > 0 ? await models.Itinerario.bulkCreate(data) : null
  return result
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

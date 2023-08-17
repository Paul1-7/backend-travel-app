const { models } = require('../libs/sequelize.js')

async function ListarChoferes() {
  return await models.Choferes.findAll({
    where: {
      borrado: false
    },
    include: ['vehiculo']
  })
}

async function BuscarChofer(id) {
  return await models.Choferes.findByPk(id, {
    where: {
      borrado: false
    }
  })
}

async function AgregarChofer(lugar) {
  return await models.Choferes.create(lugar)
}

async function ModificarChofer(id, cambio) {
  const chofer = await models.Choferes.findByPk(id)
  return await chofer?.update(cambio)
}

async function EliminarChofer(id, options = {}) {
  const result = await models.Choferes.update(
    { borrado: true },
    {
      where: { id },
      ...options
    }
  )

  return result[0] > 0
}

module.exports = {
  ListarChoferes,
  BuscarChofer,
  AgregarChofer,
  ModificarChofer,
  EliminarChofer
}

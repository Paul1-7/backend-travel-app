const { models } = require('../libs/sequelize.js')

async function ListarImagenes() {
  return await models.Imagenes.findAll()
}

async function BuscarImagenes(id) {
  return await models.Imagenes.findByPk(id)
}

async function AgregarImagenes(imagen) {
  return await models.Imagenes.create(imagen)
}

async function ModificarImagenes(id, cambio) {
  const user = await models.Imagenes.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarImagenes(id) {
  const user = await models.Imagenes.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarImagenes,
  BuscarImagenes,
  AgregarImagenes,
  ModificarImagenes,
  EliminarImagenes
}

const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarUsuarios() {
  return await models.Usuarios.findAll({
    include: { model: models.Roles, as: 'roles', through: { attributes: [] } }
  })
}

async function BuscarUsuarios(id) {
  return await models.Usuarios.findByPk(id)
}

async function AgregarUsuarios(usuario) {
  return await models.Usuarios.create(usuario)
}

async function GetUsuariosPorRol(...nombreRoles) {
  const options = {
    where: {
      '$roles.nombre$': { [Op.in]: nombreRoles }
    },
    include: { model: models.Roles, as: 'roles', through: { attributes: [] } }
  }
  return await models.Usuarios.findAll(options)
}

async function ModificarUsuarios(id, cambio) {
  const user = await models.Usuarios.findByPk(id)
  return await user?.update(cambio)
}

async function EliminarUsuarios(id) {
  const user = await models.Usuarios.findByPk(id)
  return await user?.destroy()
}

module.exports = {
  ListarUsuarios,
  BuscarUsuarios,
  AgregarUsuarios,
  ModificarUsuarios,
  EliminarUsuarios,
  GetUsuariosPorRol
}

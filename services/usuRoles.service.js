const { models } = require('../libs/sequelize.js')

async function AgregarRolUsuario(idUsuario, roles, options = {}) {
  const data = roles.map(({ idRol }) => ({ idUsuario, idRol }))
  return await models.UsuRoles.bulkCreate(data, { ...options })
}

async function eliminarRolUser(idUsuario, options = {}) {
  return await models.UsuRoles.destroy({
    where: { idUsuario },
    ...options
  })
}

async function actualizarRolUser(idUsuario, roles, options = {}) {
  await eliminarRolUser(idUsuario, options)
  return await AgregarRolUsuario(idUsuario, roles, options)
}

module.exports = { AgregarRolUsuario, eliminarRolUser, actualizarRolUser }

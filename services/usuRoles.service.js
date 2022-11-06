const { models } = require('../libs/sequelize.js')

async function AgregarRolUsuario(idUsuario, roles) {
  const data = roles.map(({ idRol }) => ({ idUsuario, idRol }))
  return await models.UsuRoles.bulkCreate(data)
}

module.exports = { AgregarRolUsuario }

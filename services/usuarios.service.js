const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')
const { GUIA } = require('../config/roles.js')

async function ListarUsuarios() {
  return await models.Usuarios.findAll({
    include: { model: models.Roles, as: 'roles', through: { attributes: [] } }
  })
}

async function ListarGuiasSinAsignacion(date) {
  return await models.Usuarios.findAll({
    include: [
      {
        model: models.Roles,
        as: 'roles',
        where: {
          id: GUIA.id
        },
        through: { attributes: [] }
      },
      {
        model: models.Asignaciones,
        as: 'asignaciones2',
        through: { attributes: [] }
      }
    ],
    where: {
      [Op.or]: [
        { '$asignaciones2.id$': null },
        {
          '$asignaciones2.fecha$': {
            [Op.ne]: date
          }
        }
      ]
    }
  })
}

async function BuscarUsuarios(id, options) {
  return await models.Usuarios.findByPk(id, {
    include: ['roles'],
    ...options
  })
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

async function ModificarUsuarios(id, cambio, options = {}) {
  const { password } = cambio
  const user = await models.Usuarios.findByPk(id, { ...options })

  const newPassword =
    password.length === 0 ? JSON.stringify(user).password : password

  return await user?.update(
    { ...cambio, password: newPassword },
    { ...options }
  )
}

async function EliminarUsuario(id, options = {}) {
  const user = await models.Usuarios.findByPk(id, options)
  return await user?.destroy()
}

module.exports = {
  ListarUsuarios,
  BuscarUsuarios,
  AgregarUsuarios,
  ModificarUsuarios,
  EliminarUsuario,
  GetUsuariosPorRol,
  ListarGuiasSinAsignacion
}

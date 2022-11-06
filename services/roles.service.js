const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarRoles() {
  return await models.Roles.findAll()
}

async function BuscarRoles(id) {
  return await models.Roles.findByPk(id)
}

async function AgregarRoles(rol) {
  return await models.Roles.create(rol)
}

async function BuscarRolPorNombre(nombre) {
  return await models.Roles.findOne({ where: { nombre } })
}

async function BuscarRolPorIds(ids) {
  return await (
    await models.Roles.findAll({ where: { id: { [Op.in]: ids } } })
  ).map((item) => item.toJSON())
}

module.exports = {
  ListarRoles,
  BuscarRoles,
  AgregarRoles,
  BuscarRolPorNombre,
  BuscarRolPorIds
}

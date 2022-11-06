const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/roles.service.js')

const msg = {
  notFound: 'Rol no encontrado',
  delete: 'Rol eliminado'
}

const ListarRoles = async (req, res, next) => {
  try {
    const roles = await services.ListarRoles()
    res.json(roles)
  } catch (error) {
    next(error)
  }
}

const BuscarRoles = async (req, res, next) => {
  try {
    const { id } = req.params
    const rol = await services.BuscarRoles(id)

    if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(rol)
  } catch (error) {
    next(error)
  }
}

const AgregarRoles = async (req, res, next) => {
  try {
    const { body } = req
    const rol = await services.AgregarRoles(body)
    res.json(rol)
  } catch (error) {
    next(error)
  }
}

const ModificarRoles = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const rol = await services.ModificarRoles(id, body)

    if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(rol)
  } catch (error) {
    next(error)
  }
}

const EliminarRoles = async (req, res, next) => {
  try {
    const { id } = req.params
    const rol = await services.EliminarRoles(id)

    if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarRoles,
  BuscarRoles,
  AgregarRoles,
  ModificarRoles,
  EliminarRoles
}

const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const {
  BuscarRolPorNombre,
  BuscarRolPorIds
} = require('../services/roles.service.js')
const services = require('../services/usuarios.service.js')
const { AgregarRolUsuario } = require('../services/usuRoles.service.js')

const msg = {
  notFound: 'Usuario no encontrado',
  delete: 'Usuario eliminado',
  notValid: 'Los datos ingresados no son correctos',
  agregarExito: 'Usuario agregado con exito'
}

const unirRoles = (roles, rolesData) => {
  const unirRoles = [...roles, ...rolesData]
  const idRoles = unirRoles.map(({ id: idRol }) => ({
    idRol
  }))

  const rolesUnicos = [
    ...new Map(idRoles.map((item) => [item['idRol'], item])).values()
  ]

  return rolesUnicos
}

const ListarEmpleados = async (req, res, next) => {
  try {
    const clientes = await services.ListarUsuarios()
    res.json(clientes)
  } catch (error) {
    next(error)
  }
}

const BuscarEmpleado = async (req, res, next) => {
  try {
    const { id } = req.params
    const empleado = await services.BuscarUsuarios(id)

    if (!empleado) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(empleado)
  } catch (error) {
    next(error)
  }
}

const AgregarEmpleado = async (req, res, next) => {
  try {
    const { roles: rolesEmpleado, ...datosEmpleado } = req.body

    const roles = await BuscarRolPorIds(rolesEmpleado)

    if (roles?.length === 0 || roles?.length !== rolesEmpleado?.length)
      return ERROR_RESPONSE.notAcceptable(msg.notValid, res)

    const rolCliente = await BuscarRolPorNombre('Cliente')

    const empleadoGuardado = await services.AgregarUsuarios(datosEmpleado)

    const { id: idUsuario } = empleadoGuardado
    const { id } = rolCliente
    const rolesUnicos = unirRoles(roles, [{ id }])

    await AgregarRolUsuario(idUsuario, rolesUnicos)

    res.json({ message: msg.agregarExito })
  } catch (error) {
    next(error)
  }
}

const ModificarUsuarios = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const usuario = await services.ModificarUsuarios(id, body)

    if (!usuario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(usuario)
  } catch (error) {
    next(error)
  }
}

const EliminarUsuarios = async (req, res, next) => {
  try {
    const { id } = req.params
    const usuario = await services.EliminarUsuarios(id)

    if (!usuario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarEmpleados,
  BuscarEmpleado,
  AgregarEmpleado,
  ModificarUsuarios,
  EliminarUsuarios
}

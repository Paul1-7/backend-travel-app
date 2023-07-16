const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const { BuscarRolPorNombre } = require('../services/roles.service.js')
const services = require('../services/usuarios.service.js')
const { AgregarRolUsuario } = require('../services/usuRoles.service.js')

const msg = {
  notFound: 'Cliente no encontrado',
  delete: 'Cliente eliminado',
  agregarExito: 'Cliente agregado exitosamente',
  modifySuccess: 'El cliente se modifico exitosamente'
}

const llenarUsuarioPorDefecto = (user) => {
  const { ci, telefono } = user
  user.usuario = ci
  user.password = telefono
  return user
}

const ListarClientes = async (req, res, next) => {
  try {
    const clientes = await services.GetUsuariosPorRol('Cliente')
    res.json(clientes)
  } catch (error) {
    next(error)
  }
}

const BuscarCliente = async (req, res, next) => {
  try {
    const { id } = req.params
    const cliente = await services.BuscarUsuarios(id)

    if (!cliente) return ERROR_RESPONSE.notFound(msg.notFound, res)
    res.json(cliente)
  } catch (error) {
    next(error)
  }
}

const AgregarCliente = async (req, res, next) => {
  try {
    const { body } = req
    const rolCliente = await BuscarRolPorNombre('Cliente')
    const cliente = llenarUsuarioPorDefecto(body)
    const clienteGuardado = await services.AgregarUsuarios(cliente)

    const { id: idUsuario } = clienteGuardado
    const { id: idRol } = rolCliente

    await AgregarRolUsuario(idUsuario, [{ idRol }])

    res.json({ message: msg.agregarExito })
  } catch (error) {
    next(error)
  }
}

const ModificarCliente = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req
    const usuario = await services.ModificarUsuarios(id, body)

    if (!usuario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.modifySuccess })
  } catch (error) {
    next(error)
  }
}

const EliminarCliente = async (req, res, next) => {
  try {
    const { id } = req.params
    const usuario = await services.EliminarUsuario(id)

    if (!usuario) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json({ message: msg.delete })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  ListarClientes,
  BuscarCliente,
  AgregarCliente,
  ModificarCliente,
  EliminarCliente
}

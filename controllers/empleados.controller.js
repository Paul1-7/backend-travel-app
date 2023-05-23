const { hash } = require('bcrypt')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const {
  BuscarRolPorNombre,
  BuscarRolPorIds,
  ListarRoles
} = require('../services/roles.service.js')
const services = require('../services/usuarios.service.js')
const {
  AgregarRolUsuario,
  actualizarRolUser
} = require('../services/usuRoles.service.js')
const sequelize = require('../libs/sequelize.js')
const { existClientRol } = require('../utils/dataHandler.js')
const { CLIENTE } = require('../config/roles.js')

const msg = {
  notFound: 'Empleado no encontrado',
  delete: 'Empleado eliminado',
  notValid: 'Los datos ingresados no son correctos',
  agregarExito: 'Empleado agregado con exito',
  updateSuccess: 'Empleado modificado con exito'
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

const ModificarEmpleado = async (req, res, next) => {
  try {
    await sequelize.transaction(async (t) => {
      const { id } = req.params
      const { body } = req
      let { roles, ...dataEmployee } = body

      const allRoles = await ListarRoles()
      roles = roles.map((rol) => ({ idRol: rol }))
      if (!existClientRol(allRoles, roles)) {
        const clientRol = allRoles.find((rol) => rol.nombre === CLIENTE.name)
        roles = [...roles, { idRol: clientRol.id }]
      }
      if (dataEmployee.password !== '') {
        const passwordHashed = await hash(dataEmployee.password.toString(), 10)
        dataEmployee = { ...dataEmployee, password: passwordHashed }
      }

      const employe = await services.ModificarUsuarios(id, dataEmployee, {
        transaction: t
      })

      await actualizarRolUser(employe.dataValues.id, roles, {
        transaction: t
      })

      if (!employe) return ERROR_RESPONSE.notFound(msg.notFound, res)

      res.json({ message: msg.updateSuccess })
    })
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
  ModificarEmpleado,
  EliminarUsuarios
}

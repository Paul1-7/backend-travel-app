const { compare, hash } = require('bcrypt')
const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')

const services = require('../services/usuarios.service.js')

const msg = {
  notFound: 'credenciales incorrectas'
}

const loginUsuario = async (req, res, next) => {
  try {
    const { usuario, password } = req.body

    const data = await services.BuscarUsuario({ where: { usuario } })

    if (!data) return ERROR_RESPONSE.notFound(msg.notFound, res)
    const isValidPassword = await compare(password, data.toJSON().password)

    if (!isValidPassword) return ERROR_RESPONSE.notFound(msg.notFound, res)

    res.json(data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  loginUsuario
}

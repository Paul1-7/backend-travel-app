// const { ERROR_RESPONSE } = require('../middlewares/error.handle.js')
const services = require('../services/dias.service.js')

// const msg = {
//   notFound: 'Hora no encontrado',
//   delete: 'Hora eliminado',
//   success: 'Hora guardada'
// }

const ListarDias = async (req, res, next) => {
  try {
    const dias = await services.ListarDias()
    res.json(dias)
  } catch (error) {
    next(error)
  }
}

// const BuscarHoras = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const rol = await services.BuscarHoras(id)

//     if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)
//     res.json(rol)
//   } catch (error) {
//     next(error)
//   }
// }

// const AgregarHoras = async (req, res, next) => {
//   try {
//     const { body } = req
//     const rol = await services.AgregarHoras(body)
//     res.json(rol)
//   } catch (error) {
//     next(error)
//   }
// }

// const ModificarHoras = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const { body } = req
//     const rol = await services.ModificarHoras(id, body)

//     if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)

//     res.json(rol)
//   } catch (error) {
//     next(error)
//   }
// }

// const EliminarHoras = async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const rol = await services.EliminarHoras(id)

//     if (!rol) return ERROR_RESPONSE.notFound(msg.notFound, res)

//     res.json({ message: msg.delete })
//   } catch (error) {
//     next(error)
//   }
// }

module.exports = {
  ListarDias
}

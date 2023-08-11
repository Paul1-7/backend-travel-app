const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')

async function ListarContratos() {
  return await models.Contratos.findAll({
    include: ['cliente', 'ruta']
  })
}

async function BuscarContrato(id) {
  return await models.Contratos.findByPk(id, {
    include: ['cliente', 'empleado', 'ruta']
  })
}

async function obtenerContratosPorFecha({ dateStart, dateEnd, orderBy }) {
  const options = {
    include: ['cliente', 'empleado', 'ruta'],
    where: {
      fecha: {
        [Op.between]: [dateStart, dateEnd]
      }
    },
    order: [orderBy]
  }

  return await models.Contratos.findAll(options)
}

async function AgregarContrato(contratacion) {
  return await models.Contratos.create(contratacion)
}

async function ModificarContrato(id, cambio) {
  const data = await models.Contratos.findByPk(id)
  return await data?.update(cambio)
}

module.exports = {
  ListarContratos,
  BuscarContrato,
  AgregarContrato,
  ModificarContrato,
  obtenerContratosPorFecha
}

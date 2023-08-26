const { Op } = require('sequelize')
const { models } = require('../libs/sequelize.js')
const sequelize = require('../libs/sequelize.js')
const { format } = require('date-fns')

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

async function ContarCodigoContrato() {
  const today = format(new Date(), 'yyyyMMdd')
  const pattern = `C-${today}%`
  return await models.Contratos.count({
    where: {
      codReferencia: {
        [Op.like]: pattern
      }
    }
  })
}

async function obtenerContratosPorFecha({ dateStart, dateEnd, orderBy }) {
  if (orderBy !== '4') {
    const options = {
      include: ['cliente', 'empleado', 'ruta', 'horariosRuta'],
      where: {
        fecha: {
          [Op.between]: [dateStart, dateEnd]
        }
      },
      order: [orderBy]
    }
    return await models.Contratos.findAll(options)
  }
  return await sequelize.query(
    `SELECT "Contratos"."id_cliente" AS "idCliente", count("id_cliente") AS "contractCount","cliente"."id" AS "cliente.id", "cliente"."nombre" AS "clienteNombre", "cliente"."apellido" AS "clienteApellido" FROM "Contratos" AS "Contratos" LEFT OUTER JOIN "Usuarios" AS "cliente" ON "Contratos"."id_cliente" = "cliente"."id" WHERE "Contratos"."fecha" BETWEEN '${dateStart}' AND '${dateEnd}' GROUP BY "cliente"."id", "cliente"."nombre", "idCliente" ORDER BY "contractCount" DESC;`
  )
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
  obtenerContratosPorFecha,
  ContarCodigoContrato
}

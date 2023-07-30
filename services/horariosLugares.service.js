const { models } = require('../libs/sequelize.js')

async function agregarHorarioLugar(data, options = {}) {
  return await models.HorariosLugares.create(data, options)
}

async function listarHorariosLugares() {
  return await models.HorariosLugares.findAll({
    include: ['lugar'],
    where: {
      estado: 1
    }
  })
}

async function eliminarHorarioLugar(id) {
  const schedule = await models.HorariosLugares.findByPk(id)
  return schedule.update({ estado: 0 })
}

async function buscarHorarioLugar(id) {
  return await models.HorariosLugares.findAll({
    where: {
      idLugar: id
    }
  })
}

async function modificarHorarioLugar(id, data) {
  const schedule = await models.HorariosLugares.findByPk(id)
  return schedule.update(data)
}

module.exports = {
  agregarHorarioLugar,
  listarHorariosLugares,
  eliminarHorarioLugar,
  modificarHorarioLugar,
  buscarHorarioLugar
}

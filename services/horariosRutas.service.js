const { models } = require('../libs/sequelize.js')

async function agregarHorarioRuta(data, options = {}) {
  return await models.HorariosRutas.create(data, options)
}

async function listarHorariosRutas() {
  return await models.HorariosRutas.findAll({
    where: {
      estado: 1
    },
    include: ['ruta']
  })
}

async function eliminarHorarioRuta(id) {
  const schedule = await models.HorariosRutas.findByPk(id)
  return schedule.update({ estado: 0 })
}

async function buscarHorarioRuta(id) {
  return await models.HorariosRutas.findAll({
    where: {
      idRuta: id,
      estado: 1
    },
    include: ['ruta']
  })
}

async function modificarHorarioRuta(id, data) {
  const schedule = await models.HorariosRutas.findByPk(id)
  return schedule.update(data)
}

module.exports = {
  agregarHorarioRuta,
  listarHorariosRutas,
  eliminarHorarioRuta,
  modificarHorarioRuta,
  buscarHorarioRuta
}

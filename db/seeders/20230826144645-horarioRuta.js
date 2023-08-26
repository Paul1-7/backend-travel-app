'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'HorariosRutas',
      [
        {
          id: '8c547c15-8ed2-4274-9511-bb96dc3aa5ce',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          horario_entrada: '2023-08-21T13:00:00-04:00',
          horario_salida: '2023-08-21T16:30:00-04:00',
          estado: 1
        },
        {
          id: '948c9a10-3670-4582-be8d-9c2b6d0238cf',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          horario_entrada: '2023-08-21T07:00:00-04:00',
          horario_salida: '2023-08-21T11:00:00-04:00',
          estado: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HorariosRutas', null, {})
  }
}

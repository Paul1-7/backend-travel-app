'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Horarios',
      [
        {
          id: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          hora_inicio: '"08:00 am"',
          hora_fin: '"12:00pm"'
        },
        {
          id: '3c84f191-f004-4087-9b90-f83768164c75',
          hora_inicio: '02:00pm',
          hora_fin: '06:00pm'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Horarios', null, {})
  }
}

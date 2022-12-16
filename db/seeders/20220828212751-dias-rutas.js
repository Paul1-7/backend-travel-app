'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dias_Rutas',
      [
        {
          id: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_dia: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a'
        },
        {
          id: '3c84f191-f004-4087-9b90-f83768164c75',
          id_dia: '3c84f191-f004-4087-9b90-f83768164c75',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a'
        },
        {
          id: '855cbcff-bb79-4ecd-ad07-7d3a4278223a',
          id_dia: 'eab817c8-329d-467c-a396-51051b24961d',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a'
        },
        {
          id: 'f0b9632e-6189-43ab-9f95-65a388a58528',
          id_dia: 'eab817c8-329d-467c-a396-51051b24961d',
          id_ruta: '3c84f191-f004-4087-9b90-f83768164c75'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dias_Rutas', null, {})
  }
}

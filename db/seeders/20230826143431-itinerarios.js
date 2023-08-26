'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Itinerario',
      [
        {
          id: '0790f7a2-062a-4bca-bca1-022acc16b01a',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_lugar: '7a0f809f-caba-4ab1-9da1-9603ff559e6f'
        },
        {
          id: '2a440d96-e98e-4247-86ce-91ff3fd45987',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c'
        },
        {
          id: 'ceec8079-1eb8-4b81-9f43-d4a08338b61c',
          id_ruta: '3c84f191-f004-4087-9b90-f83768164c75',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c'
        },
        {
          id: 'e2b70041-7035-4502-8c78-4002a3600da2',
          id_ruta: '3c84f191-f004-4087-9b90-f83768164c75',
          id_lugar: '789258d0-1f6c-4fa9-8bdf-43dce9a31858'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itinerario', null, {})
  }
}

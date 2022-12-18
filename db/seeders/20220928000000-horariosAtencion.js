'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Horarios_Atencion',
      [
        {
          id: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_dia: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_hora: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_lugar: '7a0f809f-caba-4ab1-9da1-9603ff559e6f'
        },
        {
          id: '3c84f191-f004-4087-9b90-f83768164c75',
          id_dia: '3c84f191-f004-4087-9b90-f83768164c75',
          id_hora: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c'
        },
        {
          id: 'f0b9632e-6189-43ab-9f95-65a388a58528',
          id_dia: 'eab817c8-329d-467c-a396-51051b24961d',
          id_hora: '3c84f191-f004-4087-9b90-f83768164c75',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Horarios_Atencion', null, {})
  }
}

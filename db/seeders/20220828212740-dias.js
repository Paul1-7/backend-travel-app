module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Dias',
      [
        {
          id: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          nombre: 'Lunes'
        },
        {
          id: '3c84f191-f004-4087-9b90-f83768164c75',
          nombre: 'Martes'
        },
        {
          id: 'eab817c8-329d-467c-a396-51051b24961d',
          nombre: 'Miercoles'
        },
        {
          id: '87242d8a-2c87-4fa4-9511-46114523e42b',
          nombre: 'Jueves'
        },
        {
          id: '8a527e22-32d7-4eef-a2d4-d76f450e640f',
          nombre: 'Viernes'
        },
        {
          id: '733645d7-2c32-4de0-a5be-c56154d8fe2f',
          nombre: 'Sabado'
        },
        {
          id: '83dfa614-97e8-4e88-ad48-dfb088eb9389',
          nombre: 'Domingo'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dias', null, {})
  }
}

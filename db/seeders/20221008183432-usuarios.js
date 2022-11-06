'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Usuarios',
      [
        {
          id: 'e57e500b-5162-4159-bba7-732228c10ed8',
          nombre: 'Lucas',
          apellido: 'Rivers Santos',
          usuario: 'lucas1234',
          password: 'lucas1234',
          telefono: '17919825',
          ci: '23423422'
        },
        {
          id: '567c0552-c250-4d69-bc54-482296a95e4b',
          nombre: 'Pedro Luis',
          apellido: 'Rios Garcia',
          usuario: 'pedro1234',
          password: 'pedro1234',
          telefono: '1919191',
          ci: '5342452435'
        },
        {
          id: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          nombre: 'Nahuel',
          apellido: 'Nilo Martinez',
          usuario: 'nahuel1234',
          password: 'nahuel1234',
          telefono: '71929191',
          ci: '523523343'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
}

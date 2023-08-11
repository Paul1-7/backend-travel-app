'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          id: '8a84d79b-49d5-4c6a-8f9d-391c12aed841',
          nombre: 'Gerente',
          estado: 1
        },
        {
          id: '567c0552-c250-4d69-bc54-482296a95e4b',
          nombre: 'Encargado de rutas',
          estado: 1
        },
        {
          id: '050836d0-5747-47c1-8ab1-14a26d05417d',
          nombre: 'Secretaria',
          estado: 1
        },
        {
          id: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          nombre: 'Cliente',
          estado: 1
        },
        {
          id: '048ca6cb-cf0e-485e-9ef1-f6ab2522c1db',
          nombre: 'Guía',
          estado: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {})
  }
}

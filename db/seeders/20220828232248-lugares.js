'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Lugares',
      [
        {
          id: '7a0f809f-caba-4ab1-9da1-9603ff559e6f',
          nombre: 'Casa Vieja',
          direccion: 'Valle de la concepcion',
          estado: 1
        },

        {
          id: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c',
          nombre: 'Wine Stop',
          direccion: 'carretera valle de la concepcion',
          estado: 1
        },

        {
          id: '789258d0-1f6c-4fa9-8bdf-43dce9a31858',
          nombre: 'Bodegas Aranjuez',
          direccion: 'carretera a bermejo',
          estado: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lugares', null, {})
  }
}

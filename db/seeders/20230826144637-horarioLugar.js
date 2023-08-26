'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'HorariosLugares',
      [
        {
          id: '4678aec2-2ce4-4952-8004-81391619a716',
          id_lugar: '789258d0-1f6c-4fa9-8bdf-43dce9a31858',
          horario_entrada: '2023-08-21T07:00:00-04:00',
          horario_salida: '2023-08-21T12:00:00-04:00',
          estado: 1
        },
        {
          id: '88befe8a-7a11-4137-ba5f-b1d01a4efe66',
          id_lugar: '789258d0-1f6c-4fa9-8bdf-43dce9a31858',
          horario_entrada: '2023-08-21T13:00:00-04:00',
          horario_salida: '2023-08-21T18:30:00-04:00',
          estado: 1
        },
        {
          id: 'a33e7436-5e9f-49c2-99e0-485a7bab236c',
          id_lugar: '7a0f809f-caba-4ab1-9da1-9603ff559e6f',
          horario_entrada: '2023-08-21T07:00:00-04:00',
          horario_salida: '2023-08-21T12:00:00-04:00',
          estado: 1
        },
        {
          id: 'eb47835e-15b4-4481-b827-44144190c095',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c',
          horario_entrada: '2023-08-21T13:00:00-04:00',
          horario_salida: '2023-08-21T17:30:00-04:00',
          estado: 1
        },
        {
          id: 'eca3277d-5828-40c4-aa6c-d0329ac25152',
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c',
          horario_entrada: '2023-08-21T07:00:00-04:00',
          horario_salida: '2023-08-21T11:30:00-04:00',
          estado: 1
        },
        {
          id: 'ed67638d-fabb-43f6-b279-9fee68137628',
          id_lugar: '7a0f809f-caba-4ab1-9da1-9603ff559e6f',
          horario_entrada: '2023-08-21T13:00:00-04:00',
          horario_salida: '2023-08-21T18:30:00-04:00',
          estado: 1
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HorariosLugares', null, {})
  }
}

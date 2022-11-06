'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Puntos',
      [
        /*{
         cod_ruta:'1d63873c-519b-4f2c-8f36-b73f4705452a',
          nombre_lugar: 'Ruta 1', 
          coord_y: 'Ruta del vino y singani',
          horario_lugar: 'Lunes miercoles viernes',
          horarios_ruta: 'de 8:00 a 12:00 y 14:30 a 18:30',
          duracion_ruta: '4 horas',
          precio_ruta: '120 bs',
          estado_lugar: 1
     }*/
        {
          id: '493d6e8b-b1d3-4b5a-b482-0fc012985b45',
          lat: -21.419829,
          lng: -64.634811,
          id_lugar: '7a0f809f-caba-4ab1-9da1-9603ff559e6f'
        },
        {
          id: '90c0b7a6-381e-49ca-a529-4afc78c0ae77',
          lat: -21.319829,
          lng: -64.734811,
          id_lugar: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c'
        },
        {
          id: '12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c',
          lat: -21.319829,
          lng: -64.824811,
          id_lugar: '789258d0-1f6c-4fa9-8bdf-43dce9a31858'
        }

        //{
        /*id_lugar:'71380bf4-fe91-4523-a9f2-131ae6a5482a',
      nombre_lugar: 'Ruta 3', 
      coord_y: 'Ruta del vino arte vino y tradicion',
      horario_lugar: 'Lunes a viernes',
      estado_lugar: 1
     }*/
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Puntos', null, {})
  }
}

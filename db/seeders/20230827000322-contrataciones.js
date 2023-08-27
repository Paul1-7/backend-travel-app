'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Contratos',
      [
        {
          id: '3d3142dd-7c5a-4b83-9aee-71e9d8330e08',
          cod_referencia: 'C-20230826-0006',
          monto: 720,
          cantidad_personas: 6,
          fecha_salida: '2023-08-27 07:00:00-04',
          fecha: '2023-08-26 18:28:57.001138-04',
          idioma: 'es',
          estado: 'Pendiente',
          id_cliente: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_empleado: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_horario_ruta: '948c9a10-3670-4582-be8d-9c2b6d0238cf'
        },
        {
          id: '631fb034-325b-402b-b0ef-29efbc9e77b5',
          cod_referencia: 'C-20230826-0004',
          monto: 120,
          cantidad_personas: 1,
          fecha_salida: '2023-08-27 07:00:00-04',
          fecha: '2023-08-26 18:22:12.381315-04',
          idioma: 'es',
          estado: 'Pendiente',
          id_cliente: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_empleado: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_horario_ruta: '948c9a10-3670-4582-be8d-9c2b6d0238cf'
        },
        {
          id: 'bbc4702a-d878-43da-92a2-fa937de53726',
          cod_referencia: 'C-20230826-0005',
          monto: 480,
          cantidad_personas: '4',
          fecha_salida: '2023-08-27 07:00:00-04',
          fecha: '2023-08-26 18:22:23.719302-04',
          idioma: 'es',
          estado: 'Pendiente',
          id_cliente: 'e57e500b-5162-4159-bba7-732228c10ed8',
          id_empleado: 'e57e500b-5162-4159-bba7-732228c10ed8',
          id_ruta: '1d63873c-519b-4f2c-8f36-b73f4705452a',
          id_horario_ruta: '948c9a10-3670-4582-be8d-9c2b6d0238cf'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contratos', null, {})
  }
}

'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vehiculos',
      [
        {
          id: 'ace0fc3f-b172-4905-b2db-2865cf98678b',
          modelo: 'Toyota Corolla',
          tipo: 'auto',
          placa: 'ABC123',
          capacidad: 5,
          borrado: false
        },
        {
          id: '324c2f1d-3aa8-4bdb-b646-1f9f6847f3b0',
          modelo: 'Honda Civic',
          tipo: 'auto',
          placa: 'XYZ456',
          capacidad: 5,
          borrado: false
        },
        {
          id: 'b60047b1-a9f2-4309-9fcd-1868785dfb5a',
          modelo: 'Ford F-150',
          tipo: 'bus',
          placa: 'DEF789',
          capacidad: 15,
          borrado: false
        },
        {
          id: 'ad8cd9f1-1028-4c5f-ae20-3ed58113013d',
          modelo: 'Volkswagen Golf',
          tipo: 'bus',
          placa: 'GHI012',
          capacidad: 4,
          borrado: false
        },
        {
          id: '1fb63cca-ef00-49cf-8cfb-867438527082',
          modelo: 'Chevrolet Tahoe',
          tipo: 'bus',
          placa: 'JKL345',
          capacidad: 10,
          borrado: false
        },
        {
          id: 'b3460032-e7f7-4d9f-842f-647a041c9b9b',
          modelo: 'Nissan Altima',
          tipo: 'auto',
          placa: 'MNO678',
          capacidad: 5,
          borrado: false
        },
        {
          id: '7f4b28c2-c53c-4488-a8ea-c1b9c1171847',
          modelo: 'Jeep Wrangler',
          tipo: 'auto',
          placa: 'PQR901',
          capacidad: 6,
          borrado: false
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehiculos', null, {})
  }
}

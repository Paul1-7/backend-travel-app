'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UsuRoles',
      [
        {
          id: 'ace0fc3f-b172-4905-b2db-2865cf98678b',
          id_usuario: 'e57e500b-5162-4159-bba7-732228c10ed8',
          id_rol: '8a84d79b-49d5-4c6a-8f9d-391c12aed841'
        },
        {
          id: '324c2f1d-3aa8-4bdb-b646-1f9f6847f3b0',
          id_usuario: 'e57e500b-5162-4159-bba7-732228c10ed8',
          id_rol: '741c6697-22d7-4f87-a4f2-7c835b21176d'
        },
        {
          id: 'b60047b1-a9f2-4309-9fcd-1868785dfb5a',
          id_usuario: '567c0552-c250-4d69-bc54-482296a95e4b',
          id_rol: '567c0552-c250-4d69-bc54-482296a95e4b'
        },
        {
          id: 'ad8cd9f1-1028-4c5f-ae20-3ed58113013d',
          id_usuario: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_rol: '741c6697-22d7-4f87-a4f2-7c835b21176d'
        },
        {
          id: '1fb63cca-ef00-49cf-8cfb-867438527082',
          id_usuario: '567c0552-c250-4d69-bc54-482296a95e4b',
          id_rol: '048ca6cb-cf0e-485e-9ef1-f6ab2522c1db'
        },
        {
          id: 'b3460032-e7f7-4d9f-842f-647a041c9b9b',
          id_usuario: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          id_rol: '048ca6cb-cf0e-485e-9ef1-f6ab2522c1db'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UsuRoles', null, {})
  }
}

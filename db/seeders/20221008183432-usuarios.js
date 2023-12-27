'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Usuarios',
      [
        {
          id: 'e57e500b-5162-4159-bba7-732228c10ed8',
          nombre: 'Luciana',
          apellido: 'Garcia',
          usuario: 'admin',
          password:
            '$2a$10$z57unuipOMKJXwryVtwOouX.YGS6iIH835WXoInk2dZHD2P7GrBwC',
          telefono: '17919825',
          ci: '23423422'
        },
        {
          id: '567c0552-c250-4d69-bc54-482296a95e4b',
          nombre: 'Pedro Luis',
          apellido: 'Rios Garcia',
          usuario: 'pedro1234',
          password:
            '$2y$10$p2Z9Kw4iW7JJUBRq.IuOjuW.K/F6yiVuWFWou451cxZaAFaQjxlSG',
          telefono: '1919191',
          ci: '5342452435'
        },
        {
          id: '741c6697-22d7-4f87-a4f2-7c835b21176d',
          nombre: 'Nahuel',
          apellido: 'Nilo Martinez',
          usuario: 'nahuel1234',
          password:
            '$2y$10$E2i0IgkQYFxR2c6.54LbKeE413M.Mq1gi91rEMqSDtoG7R0UIjcxq',
          telefono: '71929191',
          ci: '523523343'
        },
        {
          id: '6c23e4c3-862b-42a1-b0a5-9a8697b4a836',
          nombre: 'Emma',
          apellido: 'Johnson',
          usuario: 'emma5678',
          password: 'emma5678',
          telefono: '98765432',
          ci: '98765432'
        },
        {
          id: 'f09a65e5-79b5-4f86-a7e2-3c3bfa5c5f5c',
          nombre: 'Liam',
          apellido: 'Miller',
          usuario: 'liam999',
          password: 'liam999',
          telefono: '45678901',
          ci: '45678901'
        },
        {
          id: '89c3a9e1-9c99-42a6-bb15-68f5154a2c46',
          nombre: 'Olivia',
          apellido: 'Brown',
          usuario: 'olivia777',
          password: 'olivia777',
          telefono: '13579246',
          ci: '13579246'
        },
        {
          id: 'c231d835-6e1a-43e9-a786-1d62c1303141',
          nombre: 'Noah',
          apellido: 'Garcia',
          usuario: 'noah555',
          password: 'noah555',
          telefono: '86420975',
          ci: '86420975'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {})
  }
}

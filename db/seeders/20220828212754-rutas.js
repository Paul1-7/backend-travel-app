'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkInsert(
      'Rutas', 
      [
        {
         id:'1d63873c-519b-4f2c-8f36-b73f4705452a',
          titulo: 'Ruta 1', 
          descripcion: 'Ruta del vino y singani',
          dias: 'Lunes miercoles viernes',
          horarios: 'de 8:00 a 12:00 y 14:30 a 18:30',
          duracion: '4 horas',
          precio: 120,
          estado: 1
     },
     {
      id:'3c84f191-f004-4087-9b90-f83768164c75',
      titulo: 'Ruta 2', 
      descripcion: 'Ruta del vino Aranjuez',
      dias: 'Lunes a sabado',
      horarios: '14:30 a 19:30',
      duracion: '5 horas',
      precio: 150,
      estado: 1
     },
     {
     id:'eab817c8-329d-467c-a396-51051b24961d',
      titulo: 'Ruta 3', 
      descripcion: 'Ruta del vino arte vino y tradicion',
      dias: 'Lunes a viernes',
      horarios: '8:00 a 12:30',
      duracion: '4 horas y media',
      precio: 130,
      estado: 1
     }
    ], 
    {}
    )
    
  },

  async down (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkDelete('Rutas', null, {});
     
  }
};

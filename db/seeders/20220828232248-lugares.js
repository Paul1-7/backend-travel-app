'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
     await queryInterface.bulkInsert(
      'Lugares', 
      [
        /*{
         cod_ruta:'1d63873c-519b-4f2c-8f36-b73f4705452a',
          nombre: 'Ruta 1', 
          direccion: 'Ruta del vino y singani',
          horarios_atencion: 'Lunes miercoles viernes',
          horarios_ruta: 'de 8:00 a 12:00 y 14:30 a 18:30',
          duracion_ruta: '4 horas',
          precio_ruta: '120 bs',
          estado: 1
     }*/
     {
      id:'7a0f809f-caba-4ab1-9da1-9603ff559e6f',
      nombre: 'Casa Vieja', 
      direccion: 'Valle de la concepcion',
      horarios_atencion: 'martes a domingo 9:00 a 21:00',
      estado: 1
     },
     
     {
      id:'12c6ba12-791a-4da6-8e1c-9f6cd0e6c68c',
      nombre: 'Wine Stop', 
      direccion: 'carretera valle de la concepcion',
      horarios_atencion: 'lunes a viernes 10:00 a 18:00',
      estado: 1
     },

     {
      id:'789258d0-1f6c-4fa9-8bdf-43dce9a31858',
      nombre: 'Bodegas Aranjuez', 
      direccion: 'carretera a bermejo',
      horarios_atencion: 'lunes a sabado 9:00 a 20:00',
      estado: 1
     },
     //{
     /*id:'71380bf4-fe91-4523-a9f2-131ae6a5482a',
      nombre: 'Ruta 3', 
      direccion: 'Ruta del vino arte vino y tradicion',
      horarios_atencion: 'Lunes a viernes',
      estado: 1
     }*/
    ], 
    {}
    )
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Lugares', null, {});
    
  }
};

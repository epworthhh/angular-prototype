'use strict';

angular.module('hbApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.rate = 2;
    $scope.max = 3;
    $scope.isReadonly = true;
    $scope.quantity = 2;

    $scope.buttons = [{
      nombre : 'Claudia',
      tipo: 'Intercambia',
      img: '/assets/images/perfil4.png',
      ofrece : [ 'Magdalenas',  'Casa'],
      busca : [ 'Persona', 'Mus'],
      fecha : ['Entre semana'],
      distancia : '500m de ti',
    }, {
      nombre : 'Luis',
      tipo: 'Busca',
      img: '/assets/images/boton_verde.png',
      ofrece : ['Parque', 'Escaleras'],
      busca : [ 'Paseo', 'Bajar'],
      fecha : ['L', 'X', 'J'],
      distancia : '500m de ti',
    }, {
      nombre : 'Angelillo',
      tipo: 'Busca',
      img: '/assets/images/perfil2.png',
      ofrece : ['Mus', 'Paseo'],
      busca : [ 'Charlar', 'Fútbol'],
      fecha : ['Ahora'],
      distancia : '100km de ti',
    }, {
      nombre : 'Manu',
      tipo: 'Ofrece',
      img: '/assets/images/boton_rojo.png',
      ofrece : ['Personas mayores'],
      busca : ['Charlar', 'Bar'],
      fecha : ['Ahora'],
      distancia : '500m de ti'
    }, {
      nombre : 'Carlos',
      tipo: 'Intercambia',
      img: '/assets/images/perfil1.png',
      ofrece : ['Mus', 'Charlar'],
      busca : ['Médico', 'Ayuda'],
      fecha : ['Ahora'],
      distancia : '500m de ti'
    }, {
      nombre : 'Maria',
      tipo: 'Intercambia',
      img: '/assets/images/boton_rojo.png',
      ofrece : ['Jugador', 'Fútbol'],
      busca : ['Equipo', 'Campo'],
      fecha : ['Ahora'],
      distancia : '1km de ti'
    }]

  });

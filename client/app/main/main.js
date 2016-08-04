'use strict';

angular.module('hbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'app/main/info.html'
      });
  });

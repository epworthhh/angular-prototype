'use strict';

angular.module('hbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('button', {
        url: '/button',
        templateUrl: 'app/button/button.html',
        controller: 'ButtonCtrl'
      })
      .state('profile-button', {
        url: '/profile-button',
        templateUrl: 'app/button/profile_button.html'
      });
  });

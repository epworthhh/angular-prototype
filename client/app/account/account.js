'use strict';

angular.module('hbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      // Primer paso del registro
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      // Segundo paso del registro
      .state('signup2', {
        url: '/signup-profile',
        templateUrl: 'app/account/signup/signup2.html'
      })
      // Último paso del registro
      .state('signup3', {
        url: '/signup-finish',
        templateUrl: 'app/account/signup/signup3.html'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });

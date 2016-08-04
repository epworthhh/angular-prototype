'use strict';

angular.module('hbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/account/profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('profile2', {
        url: '/profile-help',
        templateUrl: 'app/account/profile/profile-help.html',
        controller: 'ProfileCtrl'
      });
  });

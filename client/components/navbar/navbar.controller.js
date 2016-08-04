'use strict';

angular.module('hbApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $log) {

    $scope.menu = [{
      'title': 'Inicio',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


    $scope.logout = function() {
      Auth.logout();
      $location.path('/main');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };


  });

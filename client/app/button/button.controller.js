'use strict';

angular.module('hbApp')
  .controller('ButtonCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.rate = 3;
    $scope.max = 3;
    $scope.isReadonly = true;

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.format = 'dd-MM-yyyy';

    $scope.isCollapsed = true;

  });

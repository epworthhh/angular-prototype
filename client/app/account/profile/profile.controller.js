'use strict';

angular.module('hbApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.rate = 3;
    $scope.max = 3;
    $scope.isReadonly = true;
  });

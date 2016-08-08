'use strict';

describe('Controller: ButtonCtrl', function () {

  // load the controller's module
  beforeEach(module('hbApp'));

  var ButtonCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ButtonCtrl = $controller('ButtonCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

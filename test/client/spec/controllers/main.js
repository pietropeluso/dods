'use strict';

// describe('Controller: MainCtrl', function () {

//   // load the controller's module
//   beforeEach(module('dodsApp'));

//   var MainCtrl,
//     scope,
//     $httpBackend;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('/api/awesomeThings')
//       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
//     scope = $rootScope.$new();
//     MainCtrl = $controller('MainCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of people to the scope', function () {
//     expect(scope.dataset).toBe('');
//     $httpBackend.flush();
//     expect(scope.fetchData().length).toBe(20);
//   });
// });

describe('Controller: MainCtrl', function() {
  var $rootScope,
      $scope, 
      controller;

  beforeEach(function() {
    module('dodsApp');

    inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')('MainCtrl', {$scope: $scope});
    });
  });

  describe('Testing isFemale scope function', function() {
    it('Should return false if the title is Mr', function() {
      expect($scope.isFemale('Mr')).toBeFalsy();
    });

    it('Should return true if the title is Ms', function() {
      expect($scope.isFemale('Ms')).toBeTruthy();
    });
  });

});

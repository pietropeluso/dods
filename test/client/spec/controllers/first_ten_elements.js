// 'use strict';

// describe('Controller: FirstTenElementsCtrl', function () {

//   // load the controller's module
//   beforeEach(module('dodsApp'));

//   var FirstTenElementsCtrl,
//     scope,
//     $httpBackend;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
//     $httpBackend = _$httpBackend_;
//     $httpBackend.expectGET('/api/awesomeThings')
//       .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
//     scope = $rootScope.$new();
//     FirstTenElementsCtrl = $controller('FirstTenElementsCtrl', {
//       $scope: scope
//     });
//   }));

//   it('should attach a list of N people to the scope', function () {
//     var data = scope.fetchNItems(10);
//     expect(data.length).toBe(10);
//     $httpBackend.flush();
//     // expect(scope.awesomeThings.length).toBe(4);
//   });
// });

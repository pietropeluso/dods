'use strict';

angular.module('dodsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'All',
      'link': '/'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

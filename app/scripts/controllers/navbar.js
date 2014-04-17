'use strict';

angular.module('dodsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Show all',
        'link': '/'
      },
      {
        'title': 'Show first 10 elements',
        'link': '/first_ten_elements'
      },{
        'title': 'Show reduced layout',
        'link': '/show_reduced'
      }
    ];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

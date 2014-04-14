'use strict';

angular.module('dodsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/dataset').success(function(data) {
      $scope.dataset = data;
    });
  });

'use strict';

angular.module('dodsApp')
  .controller('MainCtrl', function ($scope, $http, dodsFactory) {

    $scope.dataset = [];

    var init = function() {
      dodsFactory.getPeople().success(function(data){
        $scope.dataset=data;
      });
    }

    $scope.toHighlight = function(suspend) {
      return suspend;
    };

    init();

  });

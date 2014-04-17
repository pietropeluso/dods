'use strict';

angular.module('dodsApp')
  .controller('ShowReducedCtrl', function ($scope, dodsFactory) {
    $scope.dataset = [];

    var fetchData = function() {
      dodsFactory.getPeople().success(function(data){
        $scope.dataset = data.results;
      });
    };

    $scope.toHighlight = function(suspend) {
      return suspend;
    };

    $scope.isFemale = function(title) {
      return title === 'Ms' || title === 'Miss' || title === 'Mrs';
    };

    fetchData();

  });

'use strict';

angular.module('dodsApp')
  .controller('FirstTenElementsCtrl', function ($scope, dodsFactory) {
    $scope.dataset = [];

    var fetchNItems = function(val) {
      dodsFactory.getPeople().success(function(data){
        $scope.dataset = data.results.splice(0, val);
      });
    };

    $scope.toHighlight = function(suspend) {
      return suspend;
    };

    $scope.isFemale = function(title) {
      return title === 'Ms' || title === 'Miss' || title === 'Mrs';
    };

    fetchNItems(10);

  });

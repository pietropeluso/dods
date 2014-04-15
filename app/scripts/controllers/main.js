'use strict';

angular.module('dodsApp')
  .controller('MainCtrl', function ($scope, dodsFactory) {

    $scope.dataset = [];

    var fetchData = function() {
      dodsFactory.getPeople().success(function(data){
        $scope.dataset = data.results;
      });
    };

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

    $scope.isReducedView = function() {
      return $scope.reducedView;
    };

    $scope.view = function(reduced) {
      fetchData();
      if (reduced) {
        $scope.reducedView = true;
      }
      else {
        $scope.reducedView = false;
      }
    };
  
    $scope.viewFirstNelements = function(val) {
      fetchNItems(val);
      $scope.reducedView = false;
    };
    
    fetchData();

  });

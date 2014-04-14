'use strict';

angular.module('dodsApp')
  .factory('dodsFactory', function ($http) {
    // Public API here
    return {
      getPeople : function() {
        return $http({
          url: '/api/dataset',
          method: 'GET'
        });
      }
    };
  });

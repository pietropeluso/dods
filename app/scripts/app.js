'use strict';

angular.module('dodsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/show_reduced', {
        templateUrl: 'partials/show_reduced',
        controller: 'ShowReducedCtrl'
      })
      .when('/first_ten_elements', {
        templateUrl: 'partials/first_ten_elements',
        controller: 'FirstTenElementsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });
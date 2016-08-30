'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'services.listFactory',
  'myApp.login',
  
  'myApp.version'
]).
config(['$routeProvider','$httpProvider', function($routeProvider, $httpProvider) {
$routeProvider.otherwise({redirectTo: '/login'});
$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

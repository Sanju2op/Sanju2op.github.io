var app = angular.module("KeyboardApp", ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'welcome.html',
        controller: ''
      })
      .when('/categories', {
        templateUrl: 'categories.html',
        controller: 'categoriesCtrl'
      })
      .when('/signup', {
        templateUrl: 'signup.html',
        controller: ''
      })
      .otherwise({ redirectTo: '/' });
  });
  app.controller('NavController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
});
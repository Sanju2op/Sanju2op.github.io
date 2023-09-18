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
      .when('/brands', {
        templateUrl: 'brands.html',
        controller: 'brandsCtrl'
      })
      .when('/layouts', {
        templateUrl: 'layouts.html',
        controller: 'layoutsCtrl'
      })
      .when('/switches', {
        templateUrl: 'switches.html',
        controller: 'switchesCtrl'
      })
      .when('/products', {
        templateUrl: 'products.html',
        controller: 'productsCtrl'
      })
      .otherwise({ redirectTo: '/' });
  });
  
  app.controller('NavController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });




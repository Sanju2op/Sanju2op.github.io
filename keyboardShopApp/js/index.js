var app = angular.module("KeyboardApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: ""
    })
    .when("/login", {
      templateUrl: "login.html",
      controller: ""
    })
    .when("/signup", {
      templateUrl: "signup.html",
      controller: ""
    })
    .when("/products", {
        templateUrl: "product.html",
        controller: "prodCatCtrl"
    })
    .otherwise({ redirectTo: "/" });
});
app.controller("NavController", function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});

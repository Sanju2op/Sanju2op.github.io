var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/books',{
        templateUrl : 'books1.html',
        controller : 'books1Ctrl'
    })
    .when('/cart',{
        templateUrl : 'cart.html',
        controller : 'cartCtrl'
    })
    .otherwise({
        template : "<h1>404</h1><p>Nothing has been selected</p>"
      });
});
app.controller('indexCtrl',function($scope){
});
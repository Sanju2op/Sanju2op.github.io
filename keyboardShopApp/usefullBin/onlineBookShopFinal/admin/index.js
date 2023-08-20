var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
	.when("/login",{
        templateUrl : 'login.html',
        controller : 'loginCtrl'
    })
    .when("/logout",{
        resolve:{
            deadResolve: function($location, user){
                user.clearData();
                $location.path("/login");
            }
        }
    })
    .when("/categories",{
		resolve:{
            check: function($location, user){
                if(!user.isUserLoggedIn()){
                    $location.path('/login')
                }
            },
        },
        templateUrl : 'categories.html',
        controller : 'categoriesCtrl'
    })
    .when("/languages",{
		resolve:{
            check: function($location, user){
                if(!user.isUserLoggedIn()){
                    $location.path('/login')
                }
            },
        },
        templateUrl : 'languages.html',
        controller : 'languagesCtrl'
    })
    .when("/publishers",{
		resolve:{
            check: function($location, user){
                if(!user.isUserLoggedIn()){
                    $location.path('/login')
                }
            },
        },
        templateUrl : 'publishers.html',
        controller : 'publishersCtrl'
    })
    .when("/authors",{
		resolve:{
            check: function($location, user){
                if(!user.isUserLoggedIn()){
                    $location.path('/login')
                }
            },
        },
        templateUrl : 'authors.html',
        controller : 'authorsCtrl'
    })
    .when("/books",{
		resolve:{
            check: function($location, user){
                if(!user.isUserLoggedIn()){
                    $location.path('/login')
                }
            },
        },
        templateUrl : 'books.html',
        controller : 'booksCtrl'
    })
    .otherwise({
        template : "<h1>404</h1><p>Nothing has been selected</p>"
      });
});
app.run(function($rootScope) {
    $rootScope.isLoggedin = false;
    $rootScope.isLoggedout = true;
});
app.service('user',function($rootScope){
    var username;
    var loggedin = false;
    var id;
    this.setId = function(userID){
        id = userID;
    }
    this.getId = function(){
        return id;
    }

    this.setUsername = function(name){
        username = name;
    }
    this.getUsername = function(){
        return username;
    }

    this.userLoggedIn = function(){
        loggedin = true;
    }
    this.isUserLoggedIn = function(){
        if(!!localStorage.getItem('login')){
            loggedin = true;
            var data = JSON.parse(localStorage.getItem('login'));
            username = data.username;
            id = data.id;
        }
        return loggedin;
    }
    this.saveData = function(data){
        username = data.user;
        id = data.useruniqueid;
        loggedin = true;
        localStorage.setItem('login', JSON.stringify({
            'username' :username,
            'id':id
        }));
    }
    this.clearData = function(){
        localStorage.removeItem('login');
        loggedin = false;
        $rootScope.isLoggedin = false;
        $rootScope.isLoggedout = true;
        username = "";
        id = "";
    }
});

app.controller('loginCtrl', function($scope,$http,$location, user, $rootScope){
    $scope.userReg = function(){
        $location.path('/register');     
    }
    $scope.login = function(){
        var email = $scope.email;
        var pwd = $scope.pwd;
        alert(email+" "+pwd);
        var fd = new FormData();
        fd.append('email',$scope.email);
        fd.append('pwd',$scope.pwd);
        $http({
            url:"login.php",
            method:"POST",
            data: fd,
            headers: {'Content-Type': undefined},
        }).then(function(response){
            //alert("from then "+response.data);
            if(response.data.status == 'loggedin'){
                alert('loggedin');    
                user.saveData(response.data);
                $rootScope.isLoggedin = true;
                $rootScope.isLoggedout = false; 
                $location.path('/categories');
                
            }
            if(response.data.status == 'error'){
                alert('invalid login');
            }            
        })
    } 
});

var app = angular.module("KeyboardApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "adminLogin.html",
      controller: "loginCtrl",
    })
    .when("/logout", {
      resolve: {
        deadResolve: function ($location, user) {
          user.clearData();
          $location.path("/login");
        },
      },
    })
    .when("/", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "welcome.html",
      controller: "",
    })
    .when("/categories", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "categories.html",
      controller: "categoriesCtrl",
    })
    .when("/brands", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "brands.html",
      controller: "brandsCtrl",
    })
    .when("/layouts", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "layouts.html",
      controller: "layoutsCtrl",
    })
    .when("/switches", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "switches.html",
      controller: "switchesCtrl",
    })
    .when("/products", {
      resolve: {
        check: function ($location, user) {
          if (!user.isUserLoggedIn()) {
            $location.path("/login");
          }
        },
      },
      templateUrl: "products.html",
      controller: "productsCtrl",
    })
    .otherwise({
      template: "<h1>404</h1><h3>Unknown Page</h3>",
    });
});

app.controller("NavController", function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
});
app.run(function($rootScope) {
  $rootScope.flag = false;
  $rootScope.isLoggedIn = false;
  $rootScope.isLoggedOut = true;
});

app.service("user", function($rootScope) {
  var username;
  var loggedIn = false;
  var id;
  this.setId = function(userId) {
    id = userId;
  };

  this.getId = function() {
    return id;
  };

  this.setUsername = function(name) {
    username = name;
  };

  this.getUsername = function() {
    return username;
  };
  
  this.userLoggedIn = function() {
    loggedIn = true;
  };

  this.isUserLoggedIn = function() {
    if(!!localStorage.getItem('login')) {
      loggedIn = true;
      var data = JSON.parse(localStorage.getItem("login"));
      username = data.username;
      id = data.id;
      $rootScope.admin_name = data.username;
      $rootScope.flag = true;
    }
    return loggedIn;
  };

  this.saveData = function(data) {
    username = data.user;
    id = data.userUniqueId;
    loggedIn = true;
    localStorage.setItem(
      "login",
      JSON.stringify({
        username: username,
        id: id,
      })
    );
  };

  this.clearData = function() {
    localStorage.removeItem("login");
    loggedIn = false;
    $rootScope.isLoggedIn = false;
    $rootScope.isLoggedOut = true;
    username = "";
    id = "";
    $rootScope.admin_name = "";
      $rootScope.flag = false;
  };
});

app.controller("loginCtrl", function($scope, $http, $location, user, $rootScope) {
  $scope.userReg = function() {
    $location.path("/register");
  };
  $scope.login = function() {
    var username = $scope.username;
    var password = $scope.password;
    alert(username + " | " + password);
    var fd = new FormData();
    fd.append("username", username);
    fd.append("password", password);
    $http({
      method:"POST",
      url:"php/login.php",
      data:fd,
      headers: { "Content-Type": undefined },
    }).then(function (response) {
      //alert("from then "+response.data);
      if (response.data.status == "loggedIn") {
        alert("loggedIn");
        user.saveData(response.data);
        $rootScope.admin_name = response.data.user;
        $rootScope.flag = true;
        $rootScope.isLoggedIn = true;
        $rootScope.isLoggedOut = false;
        // $location.path("/categories");
        $location.path("/");
      }
      if(response.data.status == "error") {
        alert("invalid Login Details");
      }
    });
  }
});

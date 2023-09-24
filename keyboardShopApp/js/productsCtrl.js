app.controller("productsCtrl", function ($scope, $http, $window, $routeParams) {
  $scope.categories = [];
  $scope.selectedCategory = ""; 

  $scope.filterCategory = function (category) {
    $scope.selectedCategory = category; // Set the selected category
    $scope.filteredProducts = $scope.products.filter(product => category === "" || product.kb_cat === category);
  }


  $scope.fetchCart = function () {
    $http({
      method: "get",
      url: "php/fetchCart.php",
    }).then(function successCallback(response) {
      $scope.item = response.data;
      // $scope.cartTotal();
    });
  };

  $scope.listCategories = function () {
    $http({
        method: "get",
        url: "admin/php/ListCatagories.php"
    }).then(function successCallback(response) {
        $scope.categories = response.data;
        console.log($scope.categories);
    });
}

    $scope.listProducts = function () {
       // alert("List is initiated");
        $http({
            method: "get",
            url: "admin/php/ListProducts.php"
        }).then(function successCallback(response) {
            $scope.products = response.data;
          //  alert(response.data);
          if($routeParams.category) {
            $scope.filterCategory($routeParams.category);
          } else {
            $scope.filterCategory("");
          }
        });
    }

    
    $scope.addToCart = function(p){
      alert(p.prod_id + " | " + p.prod_name);
      var prod_id = p.prod_id;
      var prod_name = p.prod_name;
        var prod_price = p.prod_price;
        var prod_img = p.prod_img;
        var prod_qty = 1;
        console.log("Products are assigned");
        var fd = new FormData();
        fd.append("prod_id", prod_id);
        fd.append("prod_name", prod_name);
        fd.append("prod_price", prod_price);
        fd.append("prod_img", prod_img);
        fd.append("prod_qty", prod_qty);
        console.log("fd is ready");
        
        $http({
          method: 'post',
          url: 'php/addToCart.php',
          data: fd,
          headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
          $scope.response = response.data;
          console.log(response.data);
          console.log("Success Callback");
          $scope.cartTotal();
        });
        $window.location.reload();
    }
    $scope.cartTotal = function() {
      $http({
        method: "post",
        url: "php/cartTotal.php",
      }).then(function successCallback(response) {
        $scope.tot = response.data;
        console.log("YOUR MOM");
        //$window.location.reload();
      });
    }    
  });
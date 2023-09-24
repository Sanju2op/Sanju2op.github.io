app.controller("cartCtrl", function ($scope, $http) {
    $scope.cartItems = []; 

    $scope.removeProduct = function (prod_id) {
    if (confirm("Remove this item?")) {
      var fd = new FormData();
      fd.append("prod_id", prod_id);
      $http({
        method: "post",
        url: "php/removeProduct.php",
        data: fd,
        headers: { "Content-Type": undefined },
      }).then(function successCallback(response) {
        // alert(response.data);
        $scope.fetchCart();
      });
    } else {
      return false;
    }
  };

  $scope.fetchCart = function () {
    $http({
      method: "get",
      url: "php/fetchCart.php",
    }).then(function successCallback(response) {
      $scope.cartItems = response.data;
    });
  };

  $scope.updateProduct = function (prod_id, pqty) {
    var fd = new FormData();
    fd.append("prod_id", prod_id);
    fd.append("qty", pqty);
    $http({
      method: "post",
      url: "php/updateQty.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      $scope.fetchCart();
    });
  };
  
  $scope.setTotal = function(){
    var total = 0;
    for(var i=0;i<$scope.cartItems.length; i++){
        var item = $scope.cartItems[i];
        total = total + (item.prod_qty * item.prod_price);
    }
    return total;
}

});

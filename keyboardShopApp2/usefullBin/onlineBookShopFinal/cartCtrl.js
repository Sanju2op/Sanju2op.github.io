app.controller('cartCtrl',function($scope,$http){
    //$scope.carts = [];
    $scope.heading = 'My Cart';
    $scope.removeBook = function(book_id){
        alert('book_id = ' + book_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('book_id', book_id);
            $http({
                method: 'post',
                url: 'removeBook.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.fetchCart();
            })
        } else {
            // if user clicks cancle button
            return false;
        }
    }
    $scope.fetchCart = function(){
        $http({
            method: "get",
            url: "fetchCart.php"
        }).then(function successCallback(response) {
            $scope.carts = response.data;
        });
    }
    $scope.setTotal = function(){
        var total = 0;
        for(var i=0;i<$scope.carts.length; i++){
            var item = $scope.carts[i];
            total = total + (item.book_qty * item.book_price);
        }
        return total;
    }
	$scope.updateBook = function(book_id, b){
		//alert("hello "+book_id+" ,"+ b);
		var fd = new FormData();
            fd.append('book_id', book_id);
			fd.append('Qty',b);
            $http({
                method: 'post',
                url: 'updateQty.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                $scope.fetchCart();
            })
	}
});
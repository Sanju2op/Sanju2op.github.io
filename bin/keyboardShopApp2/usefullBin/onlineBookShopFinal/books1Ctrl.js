app.controller('books1Ctrl',function($scope,$http){
    $scope.heading = 'Books';
	$scope.tot = 0;
    $scope.addToCart = function(b){
        var book_id = b.book_id;
        var book_name = b.book_name;
        var book_price = b.book_price;
        var book_qty = 1;
        alert(book_id+","+book_name+","+book_price+","+book_qty);

        var fd = new FormData();
        fd.append('book_id', book_id);
        fd.append('book_name', book_name);
        fd.append('book_price', book_price);
        fd.append('book_qty', book_qty);

        $http({
            method: 'post',
            url: 'addToCart.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            
            alert(response.data);
        });
    }
    $scope.listOfBooks = function () {
        $http({
            method: "get",
            url: "listOfBooks.php"
        }).then(function successCallback(response) {
            $scope.books = response.data;
        });
    }
    $scope.listCategories = function () {
        $http({
            method: "get",
            url: "listCategories.php"
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        });
    }

	$scope.cartTotal = function(){
		$http({
                method: 'post',
                url: 'cartTotal.php'
            }).then(function successCallback(response) {
                $scope.tot = response.data;
            });
		//return tot;
	}

})
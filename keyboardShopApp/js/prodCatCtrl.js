app.controller("prodCatCtrl", function ($scope, $http, $location) {
    $scope.listCategories = function () {
        $http({
            method: "get",
            url: "admin/php/ListCatagories.php"
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        });
    }
    $scope.filterShowCat= function(category) {
        $location.path("/products/" + category);
       // $location.path("/products");
    }
});
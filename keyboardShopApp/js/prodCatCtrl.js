app.controller("prodCatCtrl", function ($scope, categoriesService) {
    $scope.listCategories = function () {
        $http({
            method: "get",
            url: "admin/php/ListCatagories.php"
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        });
    }
});
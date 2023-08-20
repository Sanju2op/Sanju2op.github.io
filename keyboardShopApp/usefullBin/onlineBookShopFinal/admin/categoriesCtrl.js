app.controller("categoriesCtrl", function ($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
        $scope.showIns = true;
    }
    $scope.saveEdit = function () {
        var fd = new FormData();
        var files = document.getElementById('edt_file').files[0];
        var catId = $scope.edt_catId;
        var catName = $scope.edt_catName;

        fd.append('file', files);
        fd.append('catName', catName);
        fd.append('catId', catId);

        $http({
            method: 'post',
            url: 'editCat.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listCategories();
            $scope.showEdit = false;
            alert(response.data);
        });
    }
    $scope.editData = function (c) {
        $scope.showEdit = true;
        $scope.edt_catId = c.cat_id;
        $scope.edt_catName = c.cat_name;
        $scope.edt_cat_img = c.cat_img;
        alert('id = ' + c.cat_id + ' name ' + c.cat_name + ' img ' + c.cat_img);
    }
    $scope.deleteCat = function (cat_id) {
        alert('cat_id = ' + cat_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('cat_id', cat_id);
            $http({
                method: 'post',
                url: 'deleteCat.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listCategories();
            })
        } else {
            // if user clicks cancle button
            return false;
        }
    }
    $scope.listCategories = function () {
        $http({
            method: "get",
            url: "listCategories.php"
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        });
    }
    $scope.uploadFile = function () {
        var fd = new FormData();
        var files = document.getElementById('file').files[0];
        var catName = $scope.catName;
        fd.append('file', files);
        fd.append('catName', catName);

        $http({
            method: 'post',
            url: 'insertCat.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listCategories();
            $scope.showIns = false;
            alert(response.data);
        });
    }
});
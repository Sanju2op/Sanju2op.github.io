app.controller("brandsCtrl", function($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;

    $scope.showInsert = function () {
        $scope.showIns = true;
        $scope.showEdit = false;
    };

    //list Brands on Table
    $scope.listBrands = function () {
        $http({
            method: "get",
            url: "php/ListBrands.php"
        }).then(function successCallback(response) {
            $scope.brands = response.data;
        });
      }
  
    // Insert into database 
    $scope.uploadFile = function () {
        var fd = new FormData();
        var brand_name = $scope.brand_name;
        var brand_email = $scope.brand_email;
        fd.append('brand_name',brand_name);
        fd.append('brand_email',brand_email);
  
        $http({
            method: 'post',
            url: 'php/insertBrands.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listBrands();
            $scope.showIns = false;
            alert(response.data);
        });
    }
  
  // Edit Functions
    $scope.editData = function(b) {
        $scope.showEdit = true;
        $scope.showIns = false;
        $scope.edt_brand_id = b.brand_id;
        $scope.edt_brand_name = b.brand_name;
        $scope.edt_brand_email = b.brand_email;
        alert('ID : ' + b.brand_id + ' |Name : ' + b.brand_name + ' |Email : ' + b.brand_email);
    }
  
    $scope.saveEdit = function () {
        var fd = new FormData();
        var brand_id = $scope.edt_brand_id;
        var brand_name = $scope.edt_brand_name;
        var brand_email = $scope.edt_brand_email;
  
        fd.append('brand_id', brand_id);
        fd.append('brand_name', brand_name);
        fd.append('brand_email', brand_email);  

        $http({
            method: 'post',
            url: 'php/editBrands.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listBrands();
            $scope.showEdit = false;
            alert(response.data);
        });
    }
  
    $scope.deleteBrand = function (brand_id) {
        // alert('Brand_id = ' + brand_id);
        if (confirm(' Delete data ? Brand_id = ' + brand_id)) {
            //if user press ok button
            var fd = new FormData();
            fd.append('brand_id', brand_id);
            $http({
                method: 'post',
                url: 'php/deleteBrand.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                //alert(response.data);
                $scope.listBrands();
            })
        } else {
            // if user clicks cancel button
            return false;
        }
    }
});
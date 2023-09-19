app.controller("productsCtrl", function($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
    $scope.showIns = true;
    $scope.showEdit = false;
    };

    
    // Insert into database 
    $scope.uploadFile = function () {
        var fd = new FormData();
        var prod_img = document.getElementById('prod_img').files[0];
        var prod_name = $scope.prod_name;
        var prod_desc = $scope.prod_desc;
        var prod_price = $scope.prod_price;
        var prod_qty = $scope.prod_qty;
        var kb_layout = $scope.kb_layout;
        var kb_cat = $scope.kb_cat;
        var kb_brand = $scope.kb_brand;
        var kb_switch = $scope.kb_switch;
        fd.append("prod_img", prod_img);
        fd.append("prod_name", prod_name);
        fd.append("prod_desc", prod_desc);
        fd.append("prod_price", prod_price);
        fd.append("prod_qty", prod_qty);
        fd.append("kb_layout", kb_layout);
        fd.append("kb_cat", kb_cat);
        fd.append("kb_brand", kb_brand);
        fd.append("kb_switch", kb_switch);
        $http({
            method: 'post',
            url: 'php/insertProducts.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listProducts();
            $scope.showIns = false;
            alert(response.data);
        });
    }

  // List Products on Table Function
    $scope.listProducts = function () {
        $http({
            method: "get",
            url: "php/ListProducts.php"
        }).then(function successCallback(response) {
            $scope.products = response.data;
        });
    }

    // Edit Functions
    $scope.editData = function(p) {
        $scope.showEdit = true;
        $scope.showIns = false;
        $scope.edt_prod_id = p.prod_id;
        $scope.edt_prod_img = p.prod_img;
        $scope.edt_prod_name = p.prod_name;
        $scope.edt_prod_desc = p.prod_desc;
        $scope.edt_prod_price = p.prod_price;
        $scope.edt_prod_qty = p.prod_qty;
        $scope.edt_kb_layout = p.layout_id;
        $scope.edt_kb_cat = p.cat_id;
        $scope.edt_kb_brand = p.brand_id;
        $scope.edt_kb_switch = p.switch_id;

        alert("Edit data of Product ID : " + p.prod_id + " |Name : " + p.prod_name );
    }

    $scope.saveEdit = function () {
        var fd = new FormData();
        var prod_id = $scope.edt_prod_id
        var prod_img = document.getElementById('edt_prod_file').files[0];
        var prod_name = $scope.edt_prod_name;
        var prod_desc = $scope.edt_prod_desc;
        var prod_price = $scope.edt_prod_price;
        var prod_qty = $scope.edt_prod_qty;
        var kb_layout = $scope.edt_kb_layout;
        var kb_cat = $scope.edt_kb_cat;
        var kb_brand = $scope.edt_kb_brand;
        var kb_switch = $scope.edt_kb_switch;
        fd.append("prod_id",prod_id);
        fd.append("prod_img", prod_img);
        fd.append("prod_name", prod_name);
        fd.append("prod_desc", prod_desc);
        fd.append("prod_price", prod_price);
        fd.append("prod_qty", prod_qty);
        fd.append("kb_layout", kb_layout);
        fd.append("kb_cat", kb_cat);
        fd.append("kb_brand", kb_brand);
        fd.append("kb_switch", kb_switch);

        $http({
            method: 'post',
            url: 'php/editProducts.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listProducts();
            $scope.showEdit = false;
            alert(response.data);
        });
    }

    $scope.deleteProducts = function (prod_id) {
        if (confirm(' Delete data ? prod_id = ' + prod_id)) {
            //if user press ok button
            var fd = new FormData();
            fd.append('prod_id', prod_id);
            $http({
                method: 'post',
                url: 'php/deleteProducts.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                //alert(response.data);
                $scope.listProducts();
            })
        } else {
        // if user clicks cancel button
        return false;
        }
    }

    $scope.listCategories = function () {
        $http({
            method: "get",
            url: "php/ListCatagories.php"
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        });
    }
    
    $scope.listBrands = function () {
        $http({
            method: "get",
            url: "php/ListBrands.php"
        }).then(function successCallback(response) {
            $scope.brands = response.data;
        });
      }

      $scope.listLayouts = function () {
        $http({
            method: "get",
            url: "php/ListLayouts.php"
        }).then(function successCallback(response) {
            $scope.layouts = response.data;
        });
      }

      $scope.listSwitches = function () {
        $http({
            method: "get",
            url: "php/ListSwitches.php"
        }).then(function successCallback(response) {
            $scope.switches = response.data;
        });
      }
  
});
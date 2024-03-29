app.controller("categoriesCtrl", function($scope, $http) {
  $scope.showIns = false;
  $scope.showEdit = false;
  $scope.showInsert = function () {
    $scope.showIns = true;
    $scope.showEdit = false;
  };

  // Insert into database 
  $scope.uploadFile = function () {
      var fd = new FormData();
      var files = document.getElementById('cat_img').files[0];
      var cat_name = $scope.cat_name;
      fd.append('cat_img', files);
      fd.append('cat_name', cat_name);

      $http({
          method: 'post',
          url: 'php/insertCat.php',
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

  // List Categories on Table Function
  $scope.listCategories = function () {
    $http({
        method: "get",
        url: "php/ListCatagories.php"
    }).then(function successCallback(response) {
        $scope.categories = response.data;
    });
  }

  // Edit Functions
  $scope.editData = function(c) {
    $scope.showEdit = true;
    $scope.showIns = false;
    $scope.edt_catId = c.cat_id;
    $scope.edt_catName = c.cat_name;
    $scope.edt_cat_img = c.cat_img;
    alert('Category ID :' + c.cat_id + '| Category Name :' + c.cat_name + '| Category Image:' + c.cat_img);
}

  $scope.saveEdit = function () {
    var fd = new FormData();
    var files = document.getElementById('edt_img').files[0];
    var catId = $scope.edt_catId;
    var catName = $scope.edt_catName;

    fd.append('cat_img', files);
    fd.append('cat_name', catName);
    fd.append('cat_id', catId);

    $http({
        method: 'post',
        url: 'php/editCat.php',
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
});
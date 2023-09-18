app.controller("layoutsCtrl", function($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;

    $scope.showInsert = function () {
        $scope.showIns = true;
        $scope.showEdit = false;
    };

    //list layouts on Table
    $scope.listLayouts = function () {
        $http({
            method: "get",
            url: "php/ListLayouts.php"
        }).then(function successCallback(response) {
            $scope.layouts = response.data;
        });
      }
  
    // Insert into database 
    $scope.uploadFile = function () {
        var fd = new FormData();
        var layout_type = $scope.layout_type;
        fd.append('layout_type',layout_type);
  
        $http({
            method: 'post',
            url: 'php/insertLayout.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listLayouts();
            $scope.showIns = false;
            alert(response.data);
        });
    }
  
  // Edit Functions
    $scope.editData = function(l) {
        $scope.showEdit = true;
        $scope.showIns = false;
        $scope.edt_layout_id = l.layout_id;
        $scope.edt_layout_type = l.layout_type;

        alert('ID : ' + l.layout_id + ' |Name : ' + l.layout_type);
    }
  
    $scope.saveEdit = function () {
        var fd = new FormData();
        var layout_id = $scope.edt_layout_id;
        var layout_type = $scope.edt_layout_type;
  
        fd.append('layout_id', layout_id);
        fd.append('layout_type', layout_type);

        $http({
            method: 'post',
            url: 'php/editLayouts.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listLayouts();
            $scope.showEdit = false;
            alert(response.data);
        });
    }
  
    $scope.deleteLayouts = function (layout_id) {
        alert('Layout_id = ' + layout_id);
        if (confirm(' Delete data ?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('layout_id', layout_id);
            $http({
                method: 'post',
                url: 'php/deleteLayouts.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listLayouts();
            })
        } else {
            // if user clicks cancel button
            return false;
        }
    }
});
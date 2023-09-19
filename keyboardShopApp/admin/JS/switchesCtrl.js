app.controller("switchesCtrl", function($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;

    $scope.showInsert = function () {
        $scope.showIns = true;
        $scope.showEdit = false;
    };

    //list Switch on Table
    $scope.listSwitches = function () {
        $http({
            method: "get",
            url: "php/ListSwitches.php"
        }).then(function successCallback(response) {
            $scope.switches = response.data;
        });
      }
  
    // Insert into database 
    $scope.uploadFile = function () {
        var fd = new FormData();
        var switch_type = $scope.switch_type;
        fd.append('switch_type',switch_type);
  
        $http({
            method: 'post',
            url: 'php/insertSwitches.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listSwitches();
            $scope.showIns = false;
            alert(response.data);
        });
    }
  
  // Edit Functions
    $scope.editData = function(s) {
        $scope.showEdit = true;
        $scope.showIns = false;
        $scope.edt_switch_id = s.switch_id;
        $scope.edt_switch_type = s.switch_type;

        alert('ID : ' + s.switch_id + ' |Name : ' + s.switch_type);
    }
  
    $scope.saveEdit = function () {
        var fd = new FormData();
        var switch_id = $scope.edt_switch_id;
        var switch_type = $scope.edt_switch_type;
  
        fd.append('switch_id', switch_id);
        fd.append('switch_type', switch_type);

        $http({
            method: 'post',
            url: 'php/editSwitches.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listSwitches();
            $scope.showEdit = false;
            alert(response.data);
        });
    }
  
    $scope.deleteSwitches = function (switch_id) {
        //alert();
        if (confirm(' Delete data ? switch_id = ' + switch_id)) {
            //if user press ok button
            var fd = new FormData();
            fd.append('switch_id', switch_id);
            $http({
                method: 'post',
                url: 'php/deleteSwitches.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
               // alert(response.data);
                $scope.listSwitches();
            })
        } else {
            // if user clicks cancel button
            return false;
        }
    }
});
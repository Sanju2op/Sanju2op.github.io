app.controller("authorsCtrl", function ($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
        $scope.showIns = true;
    }

    $scope.saveEdit = function () {
        var fd = new FormData();
        var aut_id = $scope.edt_aut_id;
        var aut_name = $scope.edt_aut_name;
        var aut_email = $scope.edt_aut_email;
        var aut_mobile = $scope.edt_aut_mobile;

        fd.append('aut_id', aut_id);
        fd.append('aut_name', aut_name);
        fd.append('aut_email', aut_email);
        fd.append('aut_mobile', aut_mobile);

        $http({
            method: 'post',
            url: 'editAut.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listAuthers();
            $scope.showEdit = false;
            alert(response.data);
        });
    }

    $scope.editData = function(a) {
        alert('hi');
        $scope.showEdit = true;
        alert('id = ' + a.aut_id + ' name ' + a.aut_name +' email' + a.aut_email +' mobile' +a.aut_mobile);
        $scope.edt_aut_id = a.aut_id;
        $scope.edt_aut_name = a.aut_name;
        $scope.edt_aut_email = a.aut_email;
        $scope.edt_aut_mobile = a.aut_mobile;   
    }

    $scope.deleteAuther = function (aut_id) {
        alert('aut_id = ' + aut_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('aut_id', aut_id);
            $http({
                method: 'post',
                url: 'deleteAuther.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listAuthers();
            })
        } else {
            // if user clicks cancle button
            return false;
        }
    }

    $scope.listAuthers = function () {
        $http({
            method: "get",
            url: "listAuthers.php"
        }).then(function successCallback(response) {
            $scope.Authers = response.data;
        });
    }

    $scope.insertAuthor = function () {
        alert('hi');
        
        var aut_name = $scope.aut_name;
        var aut_email = $scope.aut_email;
        var aut_mobile = $scope.aut_mobile;
        
        var fd = new FormData();
        fd.append('aut_name', aut_name);
        fd.append('aut_email', aut_email);
        fd.append('aut_mobile', aut_mobile);

        $http({
            method: 'post',
            url: 'insertAuther.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listAuthers();
            $scope.showIns = false;
            alert(response.data);
        });
        
    }
});
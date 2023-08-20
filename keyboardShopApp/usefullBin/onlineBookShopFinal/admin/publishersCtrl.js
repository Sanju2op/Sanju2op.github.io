app.controller("publishersCtrl", function ($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
        $scope.showIns = true;
    }

    $scope.saveEdit = function () {
        var fd = new FormData();
        var pub_id = $scope.edt_pub_id;
        var pub_name = $scope.edt_pub_name;
        var pub_email = $scope.edt_pub_email;
        var pub_mobile = $scope.edt_pub_mobile;

        fd.append('pub_id', pub_id);
        fd.append('pub_name', pub_name);
        fd.append('pub_email', pub_email);
        fd.append('pub_mobile', pub_mobile);

        $http({
            method: 'post',
            url: 'editPub.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listPublishers();
            $scope.showEdit = false;
            alert(response.data);
        });
    }

    $scope.editData = function(p) {
        alert('hi');
        $scope.showEdit = true;
        alert('id = ' + p.pub_id + ' name ' + p.pub_name +' email' + p.pub_email +' mobile' +p.pub_mobile);
        $scope.edt_pub_id = p.pub_id;
        $scope.edt_pub_name = p.pub_name;
        $scope.edt_pub_email = p.pub_email;
        $scope.edt_pub_mobile = p.pub_mobile;   
    }

    $scope.deletePub = function (pub_id) {
        alert('pub_id = ' + pub_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('pub_id', pub_id);
            $http({
                method: 'post',
                url: 'deletePublisher.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listPublishers();
            })
        } else {
            // if user clicks cancle button
            return false;
        }
    }

    $scope.listPublishers = function () {
        $http({
            method: "get",
            url: "listPublishers.php"
        }).then(function successCallback(response) {
            $scope.Publishers = response.data;
        });
    }

    $scope.insertPub = function () {
        var fd = new FormData();
        var pub_name = $scope.pub_name;
        var pub_email = $scope.pub_email;
        var pub_mobile = $scope.pub_mobile;

        fd.append('pub_name', pub_name);
        fd.append('pub_email', pub_email);
        fd.append('pub_mobile', pub_mobile);

        $http({
            method: 'post',
            url: 'insertPublisher.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listPublishers();
            $scope.showIns = false;
            alert(response.data);
        });
    }
});
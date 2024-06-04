app.controller("languagesCtrl", function ($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
        $scope.showIns = true;
    }

    $scope.saveEdit = function () {
        var fd = new FormData();
        var lang_id = $scope.edt_lang_id;
        var lang_name = $scope.edt_lang_name;

        fd.append('lang_id', lang_id);
        fd.append('lang_name', lang_name);


        $http({
            method: 'post',
            url: 'editLang.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listLanguages();
            $scope.showEdit = false;
            alert(response.data);
        });
    }

    $scope.editData = function (l) {
        $scope.showEdit = true;
        $scope.edt_lang_id = l.lang_id;
        $scope.edt_lang_name = l.lang_name;
        alert('id = ' + l.lang_id + ' name ' + l.lang_name);
    }

    $scope.deleteLang = function (lang_id) {
        alert('lang_id = ' + lang_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('lang_id', lang_id);
            $http({
                method: 'post',
                url: 'deleteLang.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listLanguages();
            })
        } else {
            // if user clicks cancle button
            return false;
        }
    }

    $scope.listLanguages = function () {
        $http({
            method: "get",
            url: "listLanguages.php"
        }).then(function successCallback(response) {
            $scope.languages = response.data;
        });
    }

    $scope.insertLang = function () {
        var fd = new FormData();
        var lang_name = $scope.lang_name;
        fd.append('lang_name', lang_name);

        $http({
            method: 'post',
            url: 'insertLang.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listLanguages();
            $scope.showIns = false;
            alert(response.data);
        });
    }
});
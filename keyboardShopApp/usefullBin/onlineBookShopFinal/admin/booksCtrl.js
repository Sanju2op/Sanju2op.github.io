app.controller("booksCtrl", function ($scope, $http) {
    $scope.showIns = false;
    $scope.showEdit = false;
    $scope.showInsert = function () {
        $scope.showIns = true;
    }

    $scope.saveEdit = function () {
        var fd = new FormData();
        var files = document.getElementById('edt_file').files[0];
        var book_id = $scope.edt_book_Id;
        var book_name = $scope.edt_book_name;

        var book_category = $scope.edt_book_category;
        var book_author = $scope.edt_book_author;
        var book_publisher = $scope.edt_book_publisher;
        var book_language = $scope.edt_book_language;

        var book_price = $scope.edt_book_price;
        var book_qty = $scope.edt_book_qty;
        var book_pages = $scope.edt_book_pages;


        fd.append('file', files);
        fd.append('book_id', book_id);
        fd.append('book_name', book_name);

        fd.append('book_category', book_category);
        fd.append('book_author', book_author);
        fd.append('book_publisher', book_publisher);
        fd.append('book_language', book_language);

        fd.append('book_price', book_price);
        fd.append('book_qty', book_qty);
        fd.append('book_pages', book_pages);

        alert(book_id+","+book_name+","+book_category+","+book_author+","+book_publisher+","+book_language+","+book_price
        +","+book_qty+","+book_pages+","+files);

        $http({
            method: 'post',
            url: 'editBook.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listBooks();
            $scope.showEdit = false;
            alert(response.data);
        });
    }

    $scope.editData = function (b) {
        $scope.showEdit = true;
        $scope.edt_book_Id = b.book_id;
        $scope.edt_book_name = b.book_name;
        $scope.edt_book_category = b.book_category;
        $scope.edt_book_language = b.book_language;
        $scope.edt_book_publisher = b.book_publisher;
        $scope.edt_book_author = b.book_author;

        $scope.edt_book_price = b.book_price;
        $scope.edt_book_qty = b.book_qty;
        $scope.edt_book_pages = b.book_pages;

        $scope.edt_book_img = b.book_img;
        alert('id = ' + b.book_id + ' name ' + b.book_name + ' category ' + b.book_category + 
        'lang = ' + b.book_language + ' Publisher ' + b.book_publisher + ' Author ' + b.book_author
        );
    }

    $scope.deleteBook = function (book_id) {
        alert('book_id = ' + book_id);
        if (confirm('Are You sure you want to delete data?')) {
            //if user press ok button
            var fd = new FormData();
            fd.append('book_id', book_id);
            $http({
                method: 'post',
                url: 'deleteBook.php',
                data: fd,
                headers: { 'Content-Type': undefined },
            }).then(function successCallback(response) {
                alert(response.data);
                $scope.listBooks();
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
    $scope.listLanguages = function () {
        $http({
            method: "get",
            url: "listLanguages.php"
        }).then(function successCallback(response) {
            $scope.languages = response.data;
        });
    }
    $scope.listPublishers = function () {
        $http({
            method: "get",
            url: "listPublishers.php"
        }).then(function successCallback(response) {
            $scope.Publishers = response.data;
        });
    }
    $scope.listAuthers = function () {
        $http({
            method: "get",
            url: "listAuthers.php"
        }).then(function successCallback(response) {
            $scope.Authers = response.data;
        });
    }
    $scope.listBooks = function () {
        $http({
            method: "get",
            url: "listBooks.php"
        }).then(function successCallback(response) {
            $scope.books = response.data;
        });
    }
    $scope.insertBook = function(){
        var cat = $scope.book_category.cat_id;
        var lang = $scope.book_language.lang_id;
        var pub = $scope.book_publisher.pub_id;
        var aut = $scope.book_author.aut_id;

        var book_name = $scope.book_name;
        var book_price = $scope.book_price;
        var book_qty = $scope.book_qty;
        var book_pages = $scope.book_pages;
        alert('cat = '+cat+' lang : '+lang+' pub :'+pub+' aut : '+aut);
        
        var files = document.getElementById('file').files[0];
        var fd = new FormData();
        fd.append('file', files);
        fd.append('book_name', book_name);
        fd.append('cat', cat);
        fd.append('aut', aut);
        fd.append('pub', pub);
        fd.append('lang', lang);
        fd.append('book_price', book_price);
        fd.append('book_qty', book_qty);
        fd.append('book_pages', book_pages);
        

        $http({
            method: 'post',
            url: 'insertBook.php',
            data: fd,
            headers: { 'Content-Type': undefined },
        }).then(function successCallback(response) {
            // Store response data
            $scope.response = response.data;
            $scope.listBooks();
            $scope.showIns = false;
            alert(response.data);
        });
        
    }
});
app.controller("signupCtrl", function ($scope, $http, $location) {
  $scope.user = {}; 

  $scope.submit = function () {
    var fd = new FormData();
    var username = $scope.user.username;
    var email = $scope.user.email;
    var password = $scope.user.password;
    var re_password = $scope.user.re_password;
    var mobile_number = $scope.user.mobile_number;
    var addr = $scope.user.addr;

    // Append the form data to the FormData object
    fd.append("username", username);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("mobile_number", mobile_number);
    fd.append("addr", addr);

    $http({
      method: "post",
      url: "php/signup.php",
      data: fd,
      headers: { "Content-Type": undefined },
    }).then(function successCallback(response) {
      // Store response data
      $scope.response = response.data;
      alert("Register Status: " + $scope.response);
      $location.path("/cart");

      // Optionally, you can handle the response here, e.g., show a success message.
    });
  };
});

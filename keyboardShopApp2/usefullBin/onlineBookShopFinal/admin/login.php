<?php
if(!isset($_POST)) die();
//session_start();

$response = [];

$conn = mysqli_connect('localhost', 'root', '', 'angular_books');
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['pwd']);

$query = "SELECT * FROM admin WHERE email  = '$email ' AND password = '$password'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0){
    $response['status'] = 'loggedin';
        $response['user'] = $email;
        $response['useruniqueid'] = md5(uniqid());
        $_SESSION['useruniqueid'] = $response['useruniqueid'] ;
        $_SESSION['username'] = $email;
    
}else{
    $response['status'] = 'error';
}

echo json_encode($response);

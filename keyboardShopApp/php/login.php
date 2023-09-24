<?php
if(!isset($_POST)) die();
//session_start();

$response = [];

$connection = mysqli_connect('localhost', 'root', '', 'stackskb');
$username = mysqli_real_escape_string($connection, $_POST['username']);
$password = mysqli_real_escape_string($connection, $_POST['password']);

$query = "SELECT * FROM users WHERE u_name  = '$username ' AND u_pass = '$password'";
$result = mysqli_query($connection, $query);
if(mysqli_num_rows($result) > 0){
    $response['status'] = 'loggedIn';
        $response['user'] = $username;
        $response['userUniqueId'] = md5(uniqid());
        $_SESSION['userUniqueId'] = $response['userUniqueId'] ;
        $_SESSION['username'] = $username;
    
}else{
    $response['status'] = 'error';
}

echo json_encode($response);

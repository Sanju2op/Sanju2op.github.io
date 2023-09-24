<?php
include("../admin/php/config.php");

if (!empty($_POST)) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $mobile_number = $_POST['mobile_number'];
    $address = $_POST['addr'];

    // You should also consider hashing the password for security
    // For example, using password_hash() function
    // $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $insertQuery = "INSERT INTO users (u_name, u_email, u_pass, u_num, u_address) 
                    VALUES ('$username', '$email', '$password', '$mobile_number', '$address')";

    if (mysqli_query($connection, $insertQuery)) {
        echo 'Record Inserted';
    } else {
        echo 'Could not Insert Record';
    }
} else {
    echo 'Some Error';
}
?>

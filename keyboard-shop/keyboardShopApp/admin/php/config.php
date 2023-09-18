<?php
    $host = "localhost"; /* Host name */
    $user = "root"; /* User */
    $password = ""; /* Password */
    $dbname = "stackskb"; /* Database name */

    $connection = mysqli_connect($host, $user, $password, $dbname);
    // Check connection
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }
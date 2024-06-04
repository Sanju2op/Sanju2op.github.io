<?php
$connect = mysqli_connect("localhost", "root", "")or die("Error connecting server");
mysqli_select_db($connect, "assignment5")or die("Error in Selecting database");
mysqli_query($connect, "SELECT * FROM userprofile");
?>
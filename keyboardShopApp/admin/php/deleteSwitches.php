<?php
    include("config.php");
    $switch_id = $_POST['switch_id'];
    
    if($switch_id != null) {
        $query = "DELETE FROM kb_switches WHERE switch_id = '$switch_id'";
        if(mysqli_query($connection, $query)) {
            echo ' ! Record deleted !';
        } else {
            echo 'Error while deleting file !!';
        }
    } else {
        echo '! Please enter id to delete record !';
    }
?>
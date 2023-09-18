<?php
    include("config.php");
    $brand_id = $_POST['brand_id'];
    
    if($brand_id != null) {
        $query = "DELETE FROM kb_brand WHERE brand_id = '$brand_id'";
        if(mysqli_query($connection, $query)) {
            echo ' ! Record deleted !';
        } else {
            echo 'Error while deleting file !!';
        }
    } else {
        echo '! Please enter id to delete record !';
    }
?>
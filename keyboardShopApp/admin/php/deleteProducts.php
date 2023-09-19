<?php
    include("config.php");
    $prod_id = $_POST['prod_id'];
    if($prod_id != null) {
        $query = "DELETE FROM kb_products WHERE prod_id = '$prod_id'";
        if(mysqli_query($connection, $query)or die("Error in Delete Query")) {
            //echo ' ! Record deleted !';
        } else {
            echo 'Error while deleting file !!';
        }
    } else {
        echo '! Please enter id to delete record !';
    }
?>
<?php
    include("config.php");
    $brand_id = $_POST['brand_id'];
    $brand_name = $_POST['brand_name'];
    $brand_email = $_POST['brand_email'];
    
    if($brand_id != null) {            
        $query = "UPDATE kb_brand SET brand_name = '".$brand_name."', brand_email = '".$brand_email."' WHERE brand_id = '".$brand_id."'";
        if(mysqli_query($connection, $query)) {  
            echo 'Record Updated Successfully';  
        } else {  
            echo 'Error updating record';  
        }   
    } else {
        echo 'Please select Brand ID';
    }
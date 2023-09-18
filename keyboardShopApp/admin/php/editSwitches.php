<?php
    include("config.php");
    $switch_id = $_POST['switch_id'];
    $switch_type = $_POST['switch_type'];
    
    if($switch_id != null) {            
        $query = "UPDATE kb_switches SET switch_type = '".$switch_type."' WHERE switch_id = '".$switch_id."'";
        if(mysqli_query($connection, $query)) {  
            echo 'Record Updated Successfully';  
        } else {  
            echo 'Error updating record';  
        }   
    } else {
        echo 'Please select Layout ID';
    }
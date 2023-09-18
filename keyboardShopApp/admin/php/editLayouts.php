<?php
    include("config.php");
    $layout_id = $_POST['layout_id'];
    $layout_type = $_POST['layout_type'];
    
    if($layout_id != null) {            
        $query = "UPDATE kb_layout SET layout_type = '".$layout_type."' WHERE layout_id = '".$layout_id."'";
        if(mysqli_query($connection, $query)) {  
            echo 'Record Updated Successfully';  
        } else {  
            echo 'Error updating record';  
        }   
    } else {
        echo 'Please select Layout ID';
    }
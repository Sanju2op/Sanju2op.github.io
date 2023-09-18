<?php
include 'config.php';

    $lang_id = $_POST['lang_id'];
    $lang_name = $_POST['lang_name'];
    echo 'id = '.$lang_id.' name = '.$lang_name;

    if($lang_id != null)
    {            
        $query = "UPDATE language SET lang_name = '$lang_name' WHERE lang_id = '$lang_id'";
        if(mysqli_query($conn, $query))  
        {  
            echo 'Record Updated Successfully';  
        }  
        else  
        {  
            echo 'Error updating record';  
        }   
    }else{
        echo 'Please select category Id';
    }
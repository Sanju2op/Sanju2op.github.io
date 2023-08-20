<?php
include 'config.php';

    $aut_id = $_POST['aut_id'];
    $aut_name = $_POST['aut_name'];
    $aut_email = $_POST['aut_email'];
    $aut_mobile = $_POST['aut_mobile'];
    

    if($aut_id != null)
    {            
        $query = "UPDATE authors SET aut_name = '$aut_name', aut_email = '$aut_email', aut_mobile = '$aut_mobile'  WHERE aut_id = '$aut_id'";
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
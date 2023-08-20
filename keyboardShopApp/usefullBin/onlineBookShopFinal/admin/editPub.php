<?php
include 'config.php';

    $pub_id = $_POST['pub_id'];
    $pub_name = $_POST['pub_name'];
    $pub_email = $_POST['pub_email'];
    $pub_mobile = $_POST['pub_mobile'];
    

    if($pub_id != null)
    {            
        $query = "UPDATE publishers SET pub_name = '$pub_name', pub_email = '$pub_email', pub_mobile = '$pub_mobile'  WHERE pub_id = '$pub_id'";
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
<?php   
include ("config.php");

if(!empty($_POST)) {  
    $switch_type = $_POST['switch_type'];

    $insertQuery = "INSERT INTO kb_switches (switch_type) VALUES ('$switch_type')";  

    if(mysqli_query($connection, $insertQuery)) {  
        echo 'Record Inserted';  
    } else {  
        echo 'Could not Insert Record';  
    }      
} else {  
    echo 'Some Error';
}  
?> 
<?php   
include ("config.php");

if(!empty($_POST)) {  
    $layout_type = $_POST['layout_type'];

    $insertQuery = "INSERT INTO kb_layout (layout_type) VALUES ('$layout_type')";  

    if(mysqli_query($connection, $insertQuery)) {  
        echo 'Record Inserted';  
    } else {  
        echo 'Could not Insert Record';  
    }      
} else {  
    echo 'Some Error';
}  
?> 
<?php   
include ("config.php");

if(!empty($_POST)) {  
    $brand_name = $_POST['brand_name'];
    $brand_email = $_POST['brand_email']; 

    $insertQuery = "INSERT INTO kb_brand (brand_name, brand_email) VALUES ('$brand_name', '$brand_email')";  

    if(mysqli_query($connection, $insertQuery)) {  
        echo 'Record Inserted';  
    } else {  
        echo 'Could not Insert Record';  
    }      
} else {  
    echo 'Some Error';
}  
?> 
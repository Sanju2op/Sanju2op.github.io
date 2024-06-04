<?php   
 include 'config.php';
 if(!empty($_POST))  
 {  
      $aut_name  = $_POST['aut_name'];
      $aut_email  = $_POST['aut_email'];
      $aut_mobile  = $_POST['aut_mobile'];
        
$insertQuery = "INSERT INTO authors(aut_name, aut_email, aut_mobile) VALUES ('$aut_name', '$aut_email', '$aut_mobile')";  
           if(mysqli_query($conn, $insertQuery))  
           {  
                echo 'Record Inserted';  
           }  
           else  
           {  
                echo 'Could not Insert Record';  
           }  
        
 }  
 else  
 {  
      echo 'Some Error';  
     //echo $_FILES['file']['name'];
 }  
 ?> 
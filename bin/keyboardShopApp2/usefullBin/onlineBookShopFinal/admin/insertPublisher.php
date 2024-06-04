<?php   
 include 'config.php';
 if(!empty($_POST))  
 {  
      $pub_name  = $_POST['pub_name'];
      $pub_email  = $_POST['pub_email'];
      $pub_mobile  = $_POST['pub_mobile'];
        
           $insertQuery = "INSERT INTO publishers(pub_name, pub_email, pub_mobile) VALUES ('$pub_name', '$pub_email', '$pub_mobile')";  
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
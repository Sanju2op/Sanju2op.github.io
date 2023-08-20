<?php   
 include 'config.php';
 if(!empty($_POST))  
 {  
      $lang_name  = $_POST['lang_name'];
        
           $insertQuery = "INSERT INTO language(lang_name) VALUES ('".$lang_name."')";  
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
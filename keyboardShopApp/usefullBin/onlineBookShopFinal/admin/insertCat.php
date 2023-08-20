<?php  
 $connect = mysqli_connect("localhost", "root", "", "angular_books"); 
 //$catName  = $_POST['catName']; 
//echo $_FILES['file']['name'];
 if(!empty($_FILES))  
 {  
      $path = 'upload/' . $_FILES['file']['name'];  
      $catName  = $_POST['catName'];
      if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
      {  
           $insertQuery = "INSERT INTO categories(cat_name , cat_img) VALUES ('".$catName."','".$_FILES['file']['name']."')";  
           if(mysqli_query($connect, $insertQuery))  
           {  
                echo 'File Uploaded';  
           }  
           else  
           {  
                echo 'File Uploaded But not Saved';  
           }  
      }  
 }  
 else  
 {  
      echo 'Some Error';  
     //echo $_FILES['file']['name'];
 }  
 ?> 
<?php  
include 'config.php';
 if(!empty($_FILES))  
 {  
      $path = 'upload/' . $_FILES['file']['name'];  

      $book_name  = $_POST['book_name'];
      $book_category  = $_POST['cat'];
      $book_language  = $_POST['lang'];
      $book_publisher  = $_POST['pub'];
      $book_author  = $_POST['aut'];

      $book_price	  = $_POST['book_price'];
      $book_qty  = $_POST['book_qty'];
      $book_pages  = $_POST['book_pages'];

      if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
      {  
           $insertQuery = "INSERT INTO books(book_name , book_category , book_author , book_publisher , 
           book_language , book_price , book_qty , book_pages, book_img) 
           VALUES ('$book_name', '$book_category', '$book_author', '$book_publisher', '$book_language', 
           '$book_price', '$book_qty', '$book_pages','".$_FILES['file']['name']."')";  
           if(mysqli_query($conn, $insertQuery))  
           {  
                echo 'File Uploaded & Record Inserted';  
           }  
           else  
           {  
                echo 'File Uploaded But Record not Saved';  
           }  
      }  
 }  
 else  
 {  
      echo 'Some Error';  
     //echo $_FILES['file']['name'];
 }  
 ?> 
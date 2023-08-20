<?php
include 'config.php';

    $book_id  = $_POST['book_id'];
    $book_name = $_POST['book_name'];

    $book_category = $_POST['book_category'];
    $book_author = $_POST['book_author'];
    $book_publisher = $_POST['book_publisher'];
    $book_language = $_POST['book_language'];

    $book_price = $_POST['book_price'];
    $book_qty = $_POST['book_qty'];
    $book_pages = $_POST['book_pages'];
    
    if($book_id != null){
        if(!empty($_FILES))  
        {  
            $path = 'upload/' . $_FILES['file']['name'];  
            if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
            {  
                $query = "UPDATE books SET book_name = '$book_name', 
                book_category = '$book_category', book_author = '$book_author', book_publisher = '$book_publisher', 
                book_language = '$book_language',
                book_price = '$book_price', book_qty = '$book_qty',book_pages = '$book_pages',
                book_img = '".$_FILES['file']['name']."' WHERE book_id = '$book_id'";
                if(mysqli_query($conn, $query))  
                {  
                        echo 'Record Updated Successfully';  
                }  
                else  
                {  
                        echo 'File Uploaded But record not updated';  
                }  
            }  
        }  
        else  
        {  
            $query = "UPDATE books SET book_name = '$book_name', 
                book_category = '$book_category', book_author = '$book_author', book_publisher = '$book_publisher', 
                book_language = '$book_language',
                book_price = '$book_price', book_qty = '$book_qty',book_pages = '$book_pages'
                 WHERE book_id = '$book_id'";
            if(mysqli_query($conn, $query))  
            {  
                    echo 'Record Updated Successfully';  
            }  
            else  
            {  
                    echo 'Error updating record';  
            }  
    }  
    }else{
        echo 'Please select category Id';
    }
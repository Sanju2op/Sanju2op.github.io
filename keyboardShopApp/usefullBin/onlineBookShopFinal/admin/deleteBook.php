<?php
    include 'config.php';
    $book_id = $_POST['book_id'];
    if($book_id != null){
        $query = "DELETE FROM books WHERE book_id = '$book_id'";
        if(mysqli_query($conn, $query)){
            echo 'Record deleted';
        }else{
            echo 'Error while deleting file';
        }
    }else{
        echo 'Please enter id to delete record';
    }
?>
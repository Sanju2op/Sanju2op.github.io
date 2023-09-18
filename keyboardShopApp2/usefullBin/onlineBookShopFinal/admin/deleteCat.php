<?php
    include 'config.php';
    $cat_id = $_POST['cat_id'];
    if($cat_id != null){
        $query = "DELETE FROM categories WHERE cat_id = '$cat_id'";
        if(mysqli_query($conn, $query)){
            echo 'Record deleted';
        }else{
            echo 'Error while deleting file';
        }
    }else{
        echo 'Please enter id to delete record';
    }
?>
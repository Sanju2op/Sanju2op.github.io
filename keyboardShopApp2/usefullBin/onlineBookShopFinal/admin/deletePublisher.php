<?php
    include 'config.php';
    $pub_id = $_POST['pub_id'];
    if($pub_id != null){
        $query = "DELETE FROM publishers WHERE pub_id = '$pub_id'";
        if(mysqli_query($conn, $query)){
            echo 'Record deleted';
        }else{
            echo 'Error while deleting file';
        }
    }else{
        echo 'Please enter id to delete record';
    }
?>
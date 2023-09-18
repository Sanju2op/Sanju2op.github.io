<?php
    include 'config.php';
    $lang_id = $_POST['lang_id'];
    if($lang_id != null){
        $query = "DELETE FROM language WHERE lang_id = '$lang_id'";
        if(mysqli_query($conn, $query)){
            echo 'Record deleted';
        }else{
            echo 'Error while deleting file';
        }
    }else{
        echo 'Please enter id to delete record';
    }
?>
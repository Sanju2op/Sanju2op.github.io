<?php
    include 'config.php';
    $aut_id	 = $_POST['aut_id'];
    if($aut_id != null){
        $query = "DELETE FROM authors WHERE aut_id = '$aut_id'";
        if(mysqli_query($conn, $query)){
            echo 'Record deleted';
        }else{
            echo 'Error while deleting file';
        }
    }else{
        echo 'Please enter id to delete record';
    }
?>
<?php
    include("config.php");
    $layout_id = $_POST['layout_id'];
    
    if($layout_id != null) {
        $query = "DELETE FROM kb_layout WHERE layout_id = '$layout_id'";
        if(mysqli_query($connection, $query)) {
            echo ' ! Record deleted !';
        } else {
            echo 'Error while deleting file !!';
        }
    } else {
        echo '! Please enter id to delete record !';
    }
?>
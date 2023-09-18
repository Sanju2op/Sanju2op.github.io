<?php
    include("config.php");

    if(!empty($_FILES)) {
        $path = "../upload/".$_FILES['cat_img']['name'];
        $cat_name = $_POST['cat_name'];

        if(move_uploaded_file($_FILES['cat_img']['tmp_name'], $path)) {
            $insertQuery = "INSERT INTO kb_categories (cat_name, cat_img) VALUES ('".$_POST['cat_name']."','".$_FILES['cat_img']['name']."' )";
            if(mysqli_query($connection, $insertQuery)) {
                echo "File Uploaded";
            } else {
                echo "File Uploaded but not saved";
            }
        }
    } else {
        echo "Unexpected Error Occurred !";
    }
?>
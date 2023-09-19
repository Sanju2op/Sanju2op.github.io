<?php
    include("config.php");

    if(!empty($_FILES)) {
        $path = "../upload/".$_FILES['prod_img']['name'];
        if(move_uploaded_file($_FILES['prod_img']['tmp_name'], $path)) {

            $insertQuery = "INSERT INTO `kb_products`(`prod_img`, `prod_name`, `prod_desc`, `prod_price`, `prod_qty`, `kb_brand`, `kb_layout`, `kb_switch`, `kb_cat`) VALUES ('".$_FILES['prod_img']['name']."','".$_POST['prod_name']."','".$_POST['prod_desc']."','".$_POST['prod_price']."','".$_POST['prod_qty']."','".$_POST['kb_brand']."','".$_POST['kb_layout']."','".$_POST['kb_switch']."','".$_POST['kb_cat']."')";

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
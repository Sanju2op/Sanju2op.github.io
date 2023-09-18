<?php
    include ("config.php");
    $catId = $_POST['cat_id'];
    $catName = $_POST['cat_name'];
    echo "ID : ".$catId." |Name : " .$catName." ";

    if($catId != null) {
        if(!empty($_FILES)) {  
            echo " |Img : ".$_FILES['cat_img']['name'];
            $path = '../upload/'.$_FILES['cat_img']['name'];  
            if(move_uploaded_file($_FILES['cat_img']['tmp_name'], $path)) {  
                $query = "UPDATE kb_categories SET cat_name = '$catName', cat_img = '".$_FILES['cat_img']['name']."' WHERE cat_id = '$catId'";
                if(mysqli_query($connection, $query)) {  
                        echo ' |Record Updated Successfully';  
                } else {  
                        echo 'File Uploaded But record not updated';  
                }  
            }  
        } else {  
            $query = "UPDATE kb_categories SET cat_name = '$catName' WHERE cat_id = '$catId'";
            if(mysqli_query($connection, $query)) {  
                    echo ' |Record Updated Successfully';  
            } else {  
                    echo 'Error updating record';  
            }  
        }  
    } else {
        echo 'Please Select category Id';
    }
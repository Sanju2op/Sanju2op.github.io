<?php
    include ("config.php");
    $catId = $_POST['cat_id'];
    $catName = $_POST['cat_name'];
    echo 'id = '.$catId.' name = '.$catName;

    if($catId != null) {
        if(!empty($_FILES)) {  
            $path = 'upload/' . $_FILES['file']['name'];  
            $catName  = $_POST['catName'];
            if(move_uploaded_file($_FILES['file']['tmp_name'], $path)) {  
                $query = "UPDATE categories SET cat_name = '$catName', cat_img = '".$_FILES['file']['name']."' WHERE cat_id = '$catId'";
                if(mysqli_query($conn, $query)) {  
                        echo 'Record Updated Successfully';  
                } else {  
                        echo 'File Uploaded But record not updated';  
                }  
            }  
        } else {  
            $query = "UPDATE categories SET cat_name = '$catName' WHERE cat_id = '$catId'";
            if(mysqli_query($conn, $query)) {  
                    echo 'Record Updated Successfully';  
            } else {  
                    echo 'Error updating record';  
            }  
        }  
    } else {
        echo 'Please Select category Id';
    }
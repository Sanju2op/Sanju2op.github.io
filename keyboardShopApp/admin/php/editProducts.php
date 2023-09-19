<?php
    include ("config.php");
    $prod_id = $_POST['prod_id'];
    $prod_name = $_POST['prod_name'];
    echo "ID : ".$prod_id." |Name : ".$prod_name;

    if($prod_id != null) {
        if(!empty($_FILES)) {  
            echo " |Img : ".$_FILES['prod_img']['name'];
            $path = '../upload/'.$_FILES['prod_img']['name'];  
            if(move_uploaded_file($_FILES['prod_img']['tmp_name'], $path)) {  

                $query = "UPDATE kb_products SET
                prod_name = '$prod_name', 
                prod_img = '".$_FILES['prod_img']['name']."', 
                prod_desc = '".$_POST['prod_desc']."', 
                prod_price = '".$_POST['prod_price']."', 
                prod_qty = '".$_POST['prod_qty']."', 
                kb_layout = '".$_POST['kb_layout']."', 
                kb_cat = '".$_POST['kb_cat']."', 
                kb_brand = '".$_POST['kb_brand']."', 
                kb_switch = '".$_POST['kb_switch']."' 
                WHERE prod_id = '$prod_id'";


                if(mysqli_query($connection, $query)) {  
                        echo ' |Record Updated Successfully';  
                } else {  
                        echo 'File Uploaded But record not updated';  
                }  
            }  
        } else {  
            $query = "UPDATE kb_products SET prod_name = '$prod_name', prod_desc = '".$_POST['prod_desc']."', prod_price = '".$_POST['prod_price']."', prod_qty = '".$_POST['prod_qty']."', kb_layout = '".$_POST['kb_layout']."', kb_cat = '".$_POST['kb_cat']."', kb_brand = '".$_POST['kb_brand']."', kb_switch = '".$_POST['kb_switch']."' WHERE prod_id = '$prod_id'";
            if(mysqli_query($connection, $query)) {  
                    echo ' |Record Updated Successfully';  
            } else {  
                    echo 'Error updating record';  
            }  
        }  
    } else {
        echo 'Please Select Products Id';
    }
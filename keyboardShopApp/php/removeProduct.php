<?php
session_start();
$prod_id = $_POST['prod_id'];
foreach($_SESSION['shopping_cart'] as $keys => $values){
    if($values['prod_id'] == $prod_id){
        unset($_SESSION['shopping_cart'][$keys]);
    }
}
?>
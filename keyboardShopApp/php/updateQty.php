<?php
session_start();

$prod_id = $_POST['prod_id'];
$prod_qty = $_POST['qty'];

if(isset($_SESSION['shopping_cart'])){
    foreach($_SESSION['shopping_cart'] as $keys => $values){
        if($_SESSION['shopping_cart'][$keys]['prod_id'] == $prod_id){
            $_SESSION['shopping_cart'][$keys]['prod_qty'] = $prod_qty;
        }
    }
}
?>
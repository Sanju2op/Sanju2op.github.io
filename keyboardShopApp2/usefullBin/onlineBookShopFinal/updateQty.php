<?php
session_start();

$book_id = $_POST['book_id'];
$book_qty = $_POST['Qty'];

if(isset($_SESSION['shopping_cart'])){
    foreach($_SESSION['shopping_cart'] as $keys => $values){
        if($_SESSION['shopping_cart'][$keys]['book_id'] == $book_id){
            $_SESSION['shopping_cart'][$keys]['book_qty'] = $book_qty;
        }
    }
}
?>
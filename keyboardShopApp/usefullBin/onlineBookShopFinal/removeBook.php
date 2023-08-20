<?php
session_start();
$book_id = $_POST['book_id'];
foreach($_SESSION['shopping_cart'] as $keys => $values){
    if($values['book_id'] == $book_id){
        unset($_SESSION['shopping_cart'][$keys]);
    }
}
?>
<?php
session_start();

$book_id = $_POST['book_id'];
$book_name = $_POST['book_name'];
$book_price = $_POST['book_price'];
$book_qty = $_POST['book_qty'];

if(isset($_SESSION['shopping_cart'])){
    $is_available = 0;
    foreach($_SESSION['shopping_cart'] as $keys => $values){
        if($_SESSION['shopping_cart'][$keys]['book_id'] == $book_id){
            $is_available = $is_available + 1;

            $_SESSION['shopping_cart'][$keys]['book_qty'] = $_SESSION['shopping_cart'][$keys]['book_qty'] + 1;
        }
    }
    if($is_available == 0){
        $item_array = array(
            'book_id' => $book_id,
            'book_name' => $book_name,
            'book_price' => $book_price,
            'book_qty' => $book_qty
        );
        $_SESSION['shopping_cart'][] = $item_array;
    }
}else{
    $item_array = array(
        'book_id' => $book_id,
        'book_name' => $book_name,
        'book_price' => $book_price,
        'book_qty' => $book_qty
    );
    $_SESSION['shopping_cart'][] = $item_array;
}
?>
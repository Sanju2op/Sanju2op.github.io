<?php
session_start();
    $prod_id = $_POST['prod_id'];
    $prod_name = $_POST["prod_name"];
    $prod_price = $_POST["prod_price"];
    $prod_img = $_POST["prod_img"];
    $prod_qty = $_POST["prod_qty"];

if(isset($_SESSION['shopping_cart'])) {
    $is_available = 0; 

    foreach($_SESSION['shopping_cart'] as $keys => $values) {
        if($_SESSION['shopping_cart'][$keys]['prod_id'] == $prod_id) {

            $is_available = $is_available + 1;
            $_SESSION['shopping_cart'][$keys]['prod_qty'] = $_SESSION['shopping_cart'][$keys]['prod_qty'] + 1;
        }
    }

    if($is_available == 0){
        $item_array = array(
            'prod_id' => $prod_id,
            'prod_name' => $prod_name,
            'prod_price' => $prod_price,
            'prod_img' => $prod_img,
            'prod_qty' => $prod_qty
        );
        $_SESSION['shopping_cart'][] = $item_array;
    }
} else {
    $item_array = array(
        'prod_id' => $prod_id,
        'prod_name' => $prod_name,
        'prod_price' => $prod_price,
        'prod_img' => $prod_img,
        'prod_qty' => $prod_qty
    );
    $_SESSION['shopping_cart'][] = $item_array;
    var_dump($_SESSION['shopping_cart']);
}

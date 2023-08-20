<?php
include 'config.php';
$sql = mysqli_query($conn,"select b.*, c.*, l.*, p.*, a.* from books b, categories c, language l, publishers p, 
authors a where b.book_author = a.aut_id and b.book_publisher = p.pub_id 
and b.book_language = l.lang_id and b.book_category = c.cat_id;");
$data = array();
while($row = mysqli_fetch_array($sql)){
    $data[] = array(
    "book_id"=>$row['book_id'], 
    "book_name"=>$row['book_name'],
    "book_category"=>$row['book_category'],
    "book_author"=>$row['book_author'],
    "book_publisher"=>$row['book_publisher'], 
    "book_language"=>$row['book_language'],
    "book_price"=>$row['book_price'],
    "book_qty"=>$row['book_qty'],
    "book_pages"=>$row['book_pages'], 
    "book_img"=>$row['book_img'],
    "cat_name"=>$row['cat_name'],
    "lang_name"=>$row['lang_name'],
    "pub_name"=>$row['pub_name'], 
    "aut_name"=>$row['aut_name']
);
}
echo json_encode($data);
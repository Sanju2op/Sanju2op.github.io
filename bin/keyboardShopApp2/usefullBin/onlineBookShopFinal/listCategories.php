<?php
include 'config.php';
$sql = mysqli_query($conn,"select * from categories");
$data = array();
while($row = mysqli_fetch_array($sql)){
    $data[] = array("cat_id1"=>$row['cat_id'], "cat_name1"=>$row['cat_name'],"cat_img1"=>$row['cat_img']);
}
echo json_encode($data);
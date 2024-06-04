<?php
include 'config.php';
$sql = mysqli_query($conn,"select * from publishers");
$data = array();
while($row = mysqli_fetch_array($sql)){
    $data[] = array("pub_id"=>$row['pub_id'], "pub_name"=>$row['pub_name'],"pub_email"=>$row['pub_email'],"pub_mobile"=>$row['pub_mobile']);
}
echo json_encode($data);
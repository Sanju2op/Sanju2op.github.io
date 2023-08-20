<?php
include 'config.php';
$sql = mysqli_query($conn,"select * from language");
$data = array();
while($row = mysqli_fetch_array($sql)){
    $data[] = array("lang_id"=>$row['lang_id'], "lang_name"=>$row['lang_name']);
}
echo json_encode($data);
<?php
include 'config.php';
$sql = mysqli_query($conn,"select * from authors");
$data = array();
while($row = mysqli_fetch_array($sql)){
    $data[] = array("aut_id"=>$row['aut_id'], "aut_name"=>$row['aut_name'],"aut_email"=>$row['aut_email'],"aut_mobile"=>$row['aut_mobile']);
}
echo json_encode($data);
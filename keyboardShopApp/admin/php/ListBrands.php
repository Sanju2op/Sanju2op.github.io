<?php
    include ("config.php");
    $sql = mysqli_query($connection,"SELECT * FROM kb_brand");
    $data = array();

    while($row = mysqli_fetch_array($sql)) {
        $data[] = array("brand_id"=>$row['brand_id'], "brand_name"=>$row['brand_name'], "brand_email"=>$row['brand_email']);
    }
    echo json_encode($data);
<?php
    include ("config.php");
    $sql = mysqli_query($connection,"SELECT * FROM kb_categories");
    $data = array();

    while($row = mysqli_fetch_array($sql)) {
        $data[] = array("cat_id"=>$row['cat_id'], "cat_name"=>$row['cat_name'],"cat_img"=>$row['cat_img']);
    }
    echo json_encode($data);
<?php
    include ("config.php");
    $sql = mysqli_query($connection,"SELECT * FROM kb_layout");
    $data = array();

    while($row = mysqli_fetch_array($sql)) {
        $data[] = array("layout_id"=>$row['layout_id'], "layout_type"=>$row['layout_type']);    
    }
    echo json_encode($data);
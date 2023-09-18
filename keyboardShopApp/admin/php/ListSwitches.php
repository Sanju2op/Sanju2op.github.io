<?php
    include ("config.php");
    $sql = mysqli_query($connection,"SELECT * FROM kb_switches");
    $data = array();

    while($row = mysqli_fetch_array($sql)) {
        $data[] = array("switch_id"=>$row['switch_id'], "switch_type"=>$row['switch_type']);    
    }
    echo json_encode($data);
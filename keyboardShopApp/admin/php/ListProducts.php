<?php
    include ("config.php");
    $query = "SELECT p.*, b.*, c.*, l.*, s.* FROM kb_products p JOIN kb_brand b ON p.kb_brand = b.brand_id JOIN kb_categories c ON p.kb_cat = c.cat_id JOIN kb_layout l ON p.kb_layout = l.layout_id JOIN kb_switches s ON p.kb_switch = s.switch_id ORDER BY p.prod_id;";
    $sql = mysqli_query($connection,$query)or die("Error in Select Query");
    $data = array();
    
    while($row = mysqli_fetch_array($sql)) {
        $data[] = array(
            "prod_id" => $row['prod_id'],
            "prod_img" => $row['prod_img'],
            "prod_name" => $row['prod_name'],
            "prod_desc" => $row['prod_desc'],
            "prod_price" => $row['prod_price'],
            "prod_qty" => $row['prod_qty'],
            "kb_brand" => $row['brand_name'],
            "kb_layout" => $row['layout_type'],
            "kb_switch" => $row['switch_type'],
            "kb_cat" => $row['cat_name'],
            "brand_id" => $row['brand_id'],
            "layout_id" => $row['layout_id'],
            "cat_id" => $row['cat_id'],
            "switch_id" => $row['switch_id']
        );
    }
    echo json_encode($data);
    
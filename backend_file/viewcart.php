<?php
include "config.php";
// header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");


    $select = " SELECT * FROM cart";
    $result = mysqli_query($conn, $select);
    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[] = $row;
    }
    echo json_encode($json_array);

    // $sum = "SELECT SUM(price) FROM cart";
    // $res1 = mysqli_query($conn,$sum);
    // $json_array = array();
    // while($row1 = mysqli_fetch_assoc($res1)){
    //     $json_array[] = $row1;
    // }
    // echo json_encode($json_array);

?>
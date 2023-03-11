<?php
include "config.php";
// header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $bname = $request->bname;


    $select = "DELETE FROM addbp WHERE bname='$bname';";
    $result = mysqli_query($conn, $select);
    if(mysqli_query($conn, $result)){
        http_response_code(201);
        echo json_encode(array(
            "Success" => 'business deleted'
        ));
    }else{
        http_response_code(422);
        echo json_encode(array(
            "Error" => 'Error in deleting  '
      ));
}
}
?>
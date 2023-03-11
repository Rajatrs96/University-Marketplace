<?php
include "config.php";


header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Origin: http://localhost:3001");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");



$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
    $select = " SELECT email, firstname, lastname, dob, phonenumber, role FROM registeruser WHERE email = '$email' && password = '$password' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){
        $result = mysqli_fetch_array($result);
        $result = json_encode($result);
        http_response_code(200);
        echo '{"userData": '.$result.'}';
  
     }else{
            http_response_code(422);
            echo '{"error":"Invalid username and password"}';
        }   
}

?> 
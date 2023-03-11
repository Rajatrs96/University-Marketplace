<?php

include "config.php";
// header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $firstname = $request->firstname;
    $lastname = $request->lastname;
    $dob = $request->dob;
    $phonenumber = $request->phonenumber;
    $email = $request->email; 
    $password = $request->password;
    $role = $request->role;
   
    $update = "UPDATE registeruser SET firstname = '$firstname', lastname = '$lastname', dob = '$dob', phonenumber = '$phonenumber', password = '$password', role = '$role' WHERE email = '$email'";

        if(mysqli_query($conn, $update)){
            http_response_code(201);
            echo json_encode(array(
                "Success" => 'User registered'
            ));
        }else{
            http_response_code(422);
            echo json_encode(array(
                "Error" => 'Error in registration'
            ));
        }

        
      
}
?> 
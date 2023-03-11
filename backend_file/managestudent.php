<?php
include "config.php";
// header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Origin: *");


    // $request = json_decode($postdata);
    // $firstname = $request->firstname;
    // $lastname = $request->lastname;
    // $dob = $request->dob;
    // $phonenumber = $request->phonenumber;
    // $email = $request->email; 
    // $password = $request->password;
    // $role = $request->role;
    $select = " SELECT * FROM registeruser where role='student'";
    $result = mysqli_query($conn, $select);
    $json_array = array();
    while($row = mysqli_fetch_assoc($result)){
        $json_array[] = $row;
    }
    echo json_encode($json_array);
    // if(mysqli_num_rows($result) > 0){
    //     $result = mysqli_fetch_array($result);
    //     $result = json_encode($result);
    //     http_response_code(200);
    //     echo '{"userData": '.$result.'}';
  
    //  }else{
    //         http_response_code(422);
    //         echo '{"error":"Invalid username and password"}';
    //     }   




?>
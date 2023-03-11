<?php

// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
// Include library files 
require 'PHPMailer/Exception.php'; 
require 'PHPMailer/PHPMailer.php'; 
require 'PHPMailer/SMTP.php'; 

include "config.php";
// header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");


    $request = json_decode($postdata);
    $firstname = $request->firstname;
    $message = $request->message;
    
    if($message!='NULL'){$update = "INSERT INTO chat(firstname,message) VALUES('NULL',$message) ";
        
        
    }else{
        $insert = "INSERT INTO chat(firstname,message) VALUES('$firstname','NULL')";
        if(mysqli_query($conn, $insert)){
            http_response_code(201);
            echo json_encode(array(
                "Success" => 'User registered'
            ));
        
     }   
    }


?> 
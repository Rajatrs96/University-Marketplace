<?php


// header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// Import PHPMailer classes into the global namespace 
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\SMTP; 
use PHPMailer\PHPMailer\Exception; 
 
// Include library files 
require 'PHPMailer/Exception.php'; 
require 'PHPMailer/PHPMailer.php'; 
require 'PHPMailer/SMTP.php'; 


include "config.php";

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    $select = " SELECT email, password FROM registeruser WHERE email = '$email' ";
    $result = mysqli_query($conn, $select);
    if(mysqli_num_rows($result) > 0){
        $result = mysqli_fetch_array($result);
        $result = json_encode($result);
        http_response_code(200);
        echo '{"userData": '.$result.'}';
        try {
            # Send email to the user
            // Create an instance; Pass `true` to enable exceptions 
            $mail = new PHPMailer; 

            // Server settings 
            // $mail->SMTPDebug = SMTP::DEBUG_SERVER;    //Enable verbose debug output 
            $mail->isSendMail();                          // Set mailer to use SMTP 
            $mail->Host = 'ssl://smtp.gmail.com';           // Specify main and backup SMTP servers 
            $mail->SMTPAuth = true;                     // Enable SMTP authentication 
            $mail->Username = 'wdmpteam2@gmail.com';       // SMTP username 
            $mail->Password = 'poiuytrewq#0';         // SMTP password 
            $mail->SMTPSecure = 'ssl';                  // Enable TLS encryption, `ssl` also accepted 
            // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;     
            $mail->Port = 465;                          // TCP port to connect to 

            // echo !extension_loaded('openssl')?"Not Available":"Available";
            // Sender info 
            $mail->setFrom('wdmpteam2@gmail.com', 'wdmpteam2'); 
            $mail->addReplyTo('wdmpteam2@gmail.com', 'wdmpteam2'); 
            
            // Add a recipient 
            $mail->addAddress($email); 
            
            //$mail->addCC('cc@example.com'); 
            $mail->addBCC('vinay1991anant@gmail.com'); 
            $mail->addBCC('rajat.rs866@gmail.com'); 
            $mail->addBCC('bollamvishnu13@gmail.com'); 
            
            // Set email format to HTML 
            $mail->isHTML(true); 
            
            // Mail subject 
            $mail->Subject = 'Your password recovery in Emporium is successful!'; 
            
            # Fetching password
            $password = json_decode($result);

            // Mail body content 
            $bodyContent = '<h1>Below are your login credentials:</h1>'; 
            $bodyContent .= "<p>User Name: <b>$email</b></p>"; 
            $bodyContent .= "<p>Password: <b>$password->password</b></p>"; 
            $mail->Body    = $bodyContent; 
            
            // Send email 
            if(!$mail->send()) { 
                echo json_encode(array(
                    "Success" => 'An email has been sent to your email address'
                ));
                echo '{"success":"success"}';
            } 
        } catch (Exception $e) {
            // echo json_encode(array(
            //     "Error" => 'Message could not be sent. Mailer Error'
            // ));
            echo '{"error":"Email could not be sent"}';
        }
  
     }else{
            http_response_code(422);
            echo '{"error":"Invalid email"}';
        }   
}

?> 
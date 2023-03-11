<?php
// $servername = "localhost";
// $username = "rxb8700_rxb8700";
// $password = "mercado12345";
// $dbname = "rxb8700_UTAEmporium";
// $conn = new mysqli($servername, $username, $password, $dbname);
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }


// Local Machine Setup

// <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mercado";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



// Cloud Setup 

// <?php
// $servername = "localhost";
// $username = "rxb8700_rxb8700";
// $password = "mercado1234";
// $dbname = "rxb8700_UTAEmporium";
// $conn = new mysqli($servername, $username, $password, $dbname);
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

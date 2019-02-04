<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
// echo password_hash('rasmuslerdorf', PASSWORD_DEFAULT)."\n";
//
// $hash = '$2y$10$M0qW46ra3Nttf3tVDxtC4u.b5JAiua/SPSFYX.ZTb1eTqDCBuytBW';
//
// if (password_verify('rasmuslerdorf', $hash)) {
//     echo 'Password is valid!';
// } else {
//     echo 'Invalid password.';
// }
// include('connect.php');
//
// $pw = $_GET['pw'];
//
// if(password_verify($pw, $hash)){
//   echo 'Password valid!!';
// }else{
//   echo 'something has gone horribly wrong';
// }
date_default_timezone_set('America/New_York');
echo date('m/d/Y H:i:s');

?>

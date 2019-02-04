<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
  include('connect.php');

  function get_user($pdo, $un){
    $query = "SELECT * FROM tbl_users WHERE user_name ='$un'";

    $get_user = $pdo->query($query);
    $results = array();

    while($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
    }
    return $results;
  }

  function set_new_time($pdo){
    date_default_timezone_set('America/New_York');
    $date = date('m/d/Y H:i:s');

    $query = "UPDATE tbl_users SET user_date = '$date' WHERE user_id = 1";
    $update_time = $pdo->query($query);
    $update_time->execute();
  }

  if(isset($_GET['user'])){
    $un = $_GET['user'];
    $data = get_user($pdo, $un);
    echo json_encode($data);

    set_new_time($pdo);
  }





 ?>

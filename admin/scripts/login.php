<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);
  include('connect.php');

    // $check_exists_query = "SELECT COUNT(*) FROM tbl_user WHERE user_name = :username";
    //$un = $_GET['user'];

     //$check_exists_query = 'SELECT * FROM tbl_users WHERE user_name = '.'"'.$un.'"';
     //$check_exists_query = "SELECT * FROM tbl_user"
     //echo $check_exists_query;
     //$query = $pdo->query($check_exists_query);
     //print_r($query);
     // echo $check_exists_query;
		 // $user_set = $pdo->prepare($check_exists_query);
     // $result = $user_set->execute();
     //print_r($result);
     //return $result;
     //$results = $user_set->fetchAll();
     //print_r($results);

    //$user_set->execute();
    // if($user_set){
		// 	echo "User Exists!";
		// }else{
		// 	echo "NOPE";
		// }

    // $rows = array();
    //
    // while($row = $query->fetch(PDO::FETCH_ASSOC)) {
    //     $rows[] = $row;
    // }

    //$results = json_encode($rows);
    //return $rows;

    // $results;
    //header('Content-Type: application/json');
    //echo $results;
    //print_r($rows['user_id']);
    //return $results;
    function get_user($pdo, $un){

    $query = "SELECT * FROM tbl_users WHERE user_name ='$un'";

    $get_user = $pdo->query($query);
    $results = array();

    while($row = $get_user->fetch(PDO::FETCH_ASSOC)) {
      $results[] = $row;
    }
    return $results;
  }

  if(isset($_GET['user'])){
    $un = $_GET['user'];
    $data = get_user($pdo, $un);
    echo json_encode($data);
  }





 ?>

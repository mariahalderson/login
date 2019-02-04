<?php
  $user = "root";
  $pw = "root";
     try {
         $pdo = new PDO('mysql:host=localhost;dbname=db_login', $user, $pw);
     } catch(PDOException $exception) {
         echo 'connect error!' . $exception->getMessage();
     }
 ?>

<?php

  $user = "root";
  $pw = "root";
     try {
         $pdo = new PDO('mysql:host=localhost;dbname=db_login', $user, $pw);
         //var_dump($conn);
     } catch(PDOException $exception) {
         echo 'connect error!' . $exception->getMessage();
     }

  

 ?>

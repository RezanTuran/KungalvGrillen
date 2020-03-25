<?php
session_start();
function match($myName, $myPassword) { 
    include_once("./../classes/database.php");
    $database = new Database();
    $select = $database->connection->prepare("SELECT * FROM users WHERE name=:myName AND password=:myPassword");
    $select->bindParam(":myName", $myName);
    //$hash = hash('ripemd160', $myPassword); // Use this later
    $select->bindParam(":myPassword", $myPassword);

    $select->execute();
    $user = $select->fetch(PDO::FETCH_ASSOC);

    error_log(json_encode($user));
    if($user) {
        $_SESSION["myName"]=$myName;
        return true;
    } else {
        return false;
    }
}
?>
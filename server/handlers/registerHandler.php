<?php

function addNewAdmin($name, $password , $lastName, $email, $telNumber) {
    include_once("./../classes/database.php");
    $database = new Database();
    $query = $database->connection->prepare("INSERT INTO users (name,password,lastName,email,telNumber) VALUES (:name, :password, :lastName, :email, :telNumber)");
    $status = $query->execute(array(
        "name"=>$name,
        "password"=>$password,
        "lastName"=>$lastName,
        "email"=>$email,
        "telNumber"=>$telNumber,
    ));
    if (!$status){
        throw new Exception("Couldn't add the user, something went wrong", 500);
        exit;
    }
    return $status;
}

function getAllUsers() {
    include_once("./../classes/database.php");
    $database = new Database();
    $query = $database->connection->prepare("SELECT userId,name,lastName,email,telNumber FROM users");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    
    if (empty($result)){
        throw new Exception("No user found", 404);
        exit;
    }
    return $result;
}
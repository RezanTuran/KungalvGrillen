<?php 

try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "addAdmin") { 
            include_once("./../handlers/registerHandler.php"); 
              echo json_encode(addNewAdmin(
                $_POST["name"],
                $_POST["password"],
                $_POST["lastName"],
                $_POST["email"],
                $_POST["telNumber"],
            ));
            exit;
        }else {
            throw new Exception("Not a valid endpont", 501);
        }
    }  

} catch(Exception $e) {

    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
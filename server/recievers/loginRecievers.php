<?php 
try{
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if($_POST["action"] == "login") { 
            include_once("./../handlers/loginHandler.php"); 
              echo json_encode(match(
                $_POST["myName"],
                $_POST["myPassword"]
            ));
            // $_SESSION["insertUserEmail"]=$myemail;
            exit;
        }else{
                throw new Exception("Not a valid endpont", 501);
        };
    } } catch(Exception $e) {
        echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
    }
  

?>
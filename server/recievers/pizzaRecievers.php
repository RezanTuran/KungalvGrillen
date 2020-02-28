<?php
try {
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        // ### Insert Product ### //
        if($_POST["action"] == "add") { 
            include_once("./../handlers/pizzaHandler.php"); 
              echo json_encode(add(
                $_POST["pizzaNr"],
                $_POST["pizzaName"],
                $_POST["pizzaIngredienser"],
                $_FILES["pizzaImg"],
            ));
            exit;
            // ### Delete Product ### //
        }else if($_POST["action"] == "deleteProduct") {
            include_once("./../handlers/pizzaHandler.php");              
            echo json_encode(deleteProduct($_POST['id']));
            exit;
            // ### Update Product ### //
        }else if($_POST["action"] == "updateProduct"){
            include_once("./../handlers/pizzaHandler.php");              
             echo json_encode(uppdate(
                $_POST["id"],
                $_POST["pizzaNr"],
                $_POST["pizzaName"],
                $_POST["pizzaIngredienser"],
            ));
            exit;
        }else {
            throw new Exception("Not a valid endpont", 501);
        }
    }else if($_SERVER["REQUEST_METHOD"] == "GET") {
            // ### Get Product ### //
            if($_GET["action"] == "getAll") { 
                include_once("./../handlers/pizzaHandler.php");              
                echo json_encode(getAll());
                exit;
            }
    } else {
         throw new Exception("Not a valid request method", 405);
    }

} catch(Exception $e) {
    echo json_encode(array("Message" => $e->getMessage(), "Status" => $e->getCode()));
}
?>
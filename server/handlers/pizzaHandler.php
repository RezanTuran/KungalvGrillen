<?php
// ### Insert Product ### //
function add($pizzaNr,$pizzaName,$pizzaIngredienser,$pizzaImg) {
    include_once("./../handlers/imageHandler.php");
    include_once("./../classes/database.php");
    $imageUrl = uploadImage($pizzaImg);

    $database = new Database();
    $query = $database->connection->prepare("INSERT INTO pizzas (pizzaNr,pizzaName,pizzaIngredienser,pizzaImg) VALUES (:pizzaNr, :pizzaName, :pizzaIngredienser, :pizzaImg)");
    $status = $query->execute(array(
        "pizzaNr" => $pizzaNr,
        "pizzaName"=>$pizzaName,
        "pizzaIngredienser"=>$pizzaIngredienser,
        "pizzaImg"=>$imageUrl
    ));

    if (!$status){
        throw new Exception("Could not add new product", 500);
        exit;
    }
    return $status;
}
// ### Get Product ### //
function getAll() {
    include_once("./../classes/database.php");
    $database = new Database();
    $query = $database->connection->prepare("SELECT id,pizzaNr,pizzaName,pizzaIngredienser,pizzaImg FROM pizzas");
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    
    if (empty($result)){
        throw new Exception("No product found", 404);
        exit;
    }
    return $result;
}
// ### Delete Product ### //
function deleteProduct($id) {
    include_once("./../classes/database.php");
    $database = new Database();

    $query = $database->connection->prepare("DELETE FROM pizzas WHERE id = :id");
    $result = $query->execute(array(
        "id" =>$id,
    ));

    if (!$result){
        throw new Exception("No products to delete", 500);
        exit;
    }
    return $query->rowCount();
}
// ### Update Product ### //
function uppdate($id,$pizzaNr,$pizzaName,$pizzaIngredienser) {
    include_once("./../classes/database.php");
    try {
        $database = new Database();
        $query = $database->connection->prepare("UPDATE pizzas SET pizzaNr=:pizzaNr, pizzaName=:pizzaName, pizzaIngredienser=:pizzaIngredienser WHERE id = :id");
        $status = $query->execute(array(
            "id"=>$id,
            "pizzaNr" => $pizzaNr,
            "pizzaName" => $pizzaName,
            "pizzaIngredienser"=>$pizzaIngredienser,
        ));
    } catch(PDOException $err) {
        error_log($err);
    }

    if (!$status){
        throw new Exception("Could not update product", 500);
        exit;
    }
    return $status;
}

?>
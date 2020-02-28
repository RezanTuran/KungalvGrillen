let productToUpdate;

function makeRequest(url, method, formdata, callback) {
    fetch(url, {
        method: method,
        body: formdata
    }).then((data) => {
        return data.json()
    }).then((result) => {
        callback(result)
    }).catch((err) => {
        console.log("Error: ", err)
    })   
}

// ### Insert Product ### //
function insertProduct() {
    let insertPizzaNr = document.getElementsByName("insertPizzaNr")[0].value
    let insertPizzaName = document.getElementsByName("insertPizzaName")[0].value
    let insertPizzaIngredienser = document.getElementsByName("insertPizzaIngredienser")[0].value
    let insertPizzaImage = document.getElementsByName("insertPizzaImage")[0].files[0]

    var data = new FormData()

    data.append("action", "add");
    data.append("pizzaNr", insertPizzaNr);
    data.append("pizzaName", insertPizzaName);
    data.append("pizzaIngredienser", insertPizzaIngredienser);
    data.append("pizzaImg", insertPizzaImage);


     makeRequest('./../server/recievers/pizzaRecievers.php', "POST", data, (result) => {

        if(result){
            location.reload();
        }
        console.log(result);
        
    }) 
}

// ### Get Product ### //
function getAllProduct() {
    makeRequest("./../server/recievers/pizzaRecievers.php?action=getAll", "GET", null, (result) => {
        
        let table = document.getElementById("table")

        for (let i = 0; i < result.length; i++) {
            let id = (result[i].id);
            let pizzaNr = (result[i].pizzaNr);
            let pizzaName = (result[i].pizzaName);
            let pizzaIngredienser = (result[i].pizzaIngredienser);
            let pizzaImg = (result[i].pizzaImg);
            

            let row = document.createElement("tr");

            let idTd = document.createElement("td");
            let pizzaNrTd = document.createElement("td");
            let pizzaNameTd = document.createElement("td");
            let pizzaIngredienserTd = document.createElement("td");
            let pizzaImgTd = document.createElement("img");
            let deleteButton = document.createElement("button");
            let updateButton = document.createElement("button");

            deleteButton.style.background = "#B35462";
            updateButton.style.background = "#66B375";

            deleteButton.onclick = function () {
                deleteProduct(id);
            }
            updateButton.onclick = function () {
                prepareUpdateProduct(result[i])
            }

            pizzaImgTd.src = '../img/product_img/' + pizzaImg;
            idTd.innerText = id;
            pizzaNrTd.innerText = pizzaNr;
            pizzaNameTd.innerText = pizzaName;
            pizzaIngredienserTd.innerText = pizzaIngredienser;
            deleteButton.innerText = "Delete";
            updateButton.innerText = "Update";

            row.id = id;
            row.appendChild(idTd);
            row.appendChild(pizzaNrTd);
            row.appendChild(pizzaNameTd);
            row.appendChild(pizzaIngredienserTd);
            row.appendChild(pizzaImgTd);
            row.appendChild(deleteButton);
            row.appendChild(updateButton);

            table.appendChild(row);
        }
        console.log(result);
    })
}
getAllProduct()

// ### Delete Product ### //
function deleteProduct(id) {
    var data = new FormData()
    data.append("action", "deleteProduct");
    data.append("id", id);

    makeRequest("./../server/recievers/pizzaRecievers.php", "POST", data, (result) => {
        if (result) {
            const row = document.getElementById(id);
            row.remove()
        }
    })
}

// ### Update Product ### //
function fillFormWithData(product) {
    document.getElementsByName("insertPizzaNr")[0].value = product.pizzaNr
    document.getElementsByName("insertPizzaName")[0].value = product.pizzaName
    document.getElementsByName("insertPizzaIngredienser")[0].value = product.pizzaIngredienser
    document.getElementById("imageUploadInput").style.display = "none";
    document.getElementById("insertProductButton").style.display = "none";
};

function prepareUpdateProduct(product) {
    console.log(product);
    productToUpdate = product
    
    fillFormWithData(product);
};

function updateProduct() {
 productToUpdate = {
        id: productToUpdate.id,
        pizzaNr: document.getElementsByName("insertPizzaNr")[0].value,
        pizzaName: document.getElementsByName("insertPizzaName")[0].value,
        pizzaIngredienser: document.getElementsByName("insertPizzaIngredienser")[0].value,
    };

        var data = new FormData();

        data.append("action", "updateProduct");
        data.append("id", productToUpdate.id);
        data.append("pizzaNr", productToUpdate.pizzaNr);
        data.append("pizzaName", productToUpdate.pizzaName);
        data.append("pizzaIngredienser", productToUpdate.pizzaIngredienser);


    makeRequest('./../server/recievers/pizzaRecievers.php', "POST", data, (result) => {
        console.log(result);
        if(result){
            location.reload();
            alert("Produkten har uppdaterat");
        }
        
    })
}

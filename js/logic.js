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

        console.log(result);
        
    }) 
}

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

            pizzaImgTd.src = '../img/product_img/' + pizzaImg;
            idTd.innerText = id;
            pizzaNrTd.innerText = pizzaNr;
            pizzaNameTd.innerText = pizzaName;
            pizzaIngredienserTd.innerText = pizzaIngredienser;


            row.appendChild(idTd);
            row.appendChild(pizzaNrTd);
            row.appendChild(pizzaNameTd);
            row.appendChild(pizzaIngredienserTd);
            row.appendChild(pizzaImgTd);

            table.appendChild(row);
        }
        console.log(result);
    })
}
getAllProduct()
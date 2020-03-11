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
// Get product //
function getAllProduct() {
    makeRequest("./../server/recievers/pizzaRecievers.php?action=getAll", "GET", null, (result) => {
        
        let table = document.getElementById("table")

        for (let i = 0; i < result.length; i++) {
            let id = (result[i].id);
            let pizzaNr = (result[i].pizzaNr);
            let pizzaName = (result[i].pizzaName);
            let pizzaIngredienser = (result[i].pizzaIngredienser);
            let pizzaPrice = (result[i].pizzaPrice);
            let pizzaImg = (result[i].pizzaImg);
            

            let row = document.createElement("tr");

            let idTd = document.createElement("td");
            let pizzaNrTd = document.createElement("td");
            let pizzaNameTd = document.createElement("td");
            let pizzaIngredienserTd = document.createElement("td");
            let pizzaPriceTd = document.createElement("td");
            let pizzaImgTd = document.createElement("img");

            pizzaPriceTd.classList = "pizzaPrice";
            idTd.classList = "pizzaId"

            pizzaImgTd.src = '../img/product_img/' + pizzaImg;
            idTd.innerText = id;
            pizzaNrTd.innerText = pizzaNr;
            pizzaNameTd.innerText = pizzaName;
            pizzaIngredienserTd.innerText = pizzaIngredienser;
            pizzaPriceTd.innerText = pizzaPrice;
            
            row.appendChild(idTd);
            row.appendChild(pizzaNrTd);
            row.appendChild(pizzaNameTd);
            row.appendChild(pizzaIngredienserTd);
            row.appendChild(pizzaPriceTd)
            row.appendChild(pizzaImgTd);

            table.appendChild(row);
        }
        console.log(result);
    })
}
getAllProduct()

// Responsive Nav //
$(document).ready(function () {
    $(".hamburger-btn").click(function () {
        $(".hamburger-btn").toggleClass("hamburger-change");
        $("ul").finish().slideToggle(500);
    });
});

// ServiceBox Animation //
function serviceDivAniamtion1() {
    let cahngeDivBackgorund1 = document.getElementById("serviceDiv1");
    cahngeDivBackgorund1.style.transform = "rotate(50deg)";
    cahngeDivBackgorund1.style.transition = "0.5s";
    cahngeDivBackgorund1.style.background = "#121618";
    cahngeDivBackgorund1.style.border = "3px solid white";
    
    let changeIconColor = document.getElementById("serviceIcon1");
    changeIconColor.style.color = "white";
}
function serviceDivAniamtion2() {
    let cahngeDivBackgorund2 = document.getElementById("serviceDiv2");
    cahngeDivBackgorund2.style.transform = "rotate(50deg)";
    cahngeDivBackgorund2.style.transition = "0.5s";
    cahngeDivBackgorund2.style.background = "#121618";
    cahngeDivBackgorund2.style.border = "3px solid white";

    let changeIconColor = document.getElementById("serviceIcon2");
    changeIconColor.style.color = "white";
}
function serviceDivAniamtion3(){
    let cahngeDivBackgorund3 = document.getElementById("serviceDiv3");
    cahngeDivBackgorund3.style.transform = "rotate(50deg)";
    cahngeDivBackgorund3.style.transition = "0.5s";
    cahngeDivBackgorund3.style.background = "#121618";
    cahngeDivBackgorund3.style.border = "3px solid white";

    let changeIconColor = document.getElementById("serviceIcon3");
    changeIconColor.style.color = "white";
}

function serviceDivAniamtionOut1() {
    let cahngeDivBackgorund = document.getElementById("serviceDiv1");
    cahngeDivBackgorund.style.transform = "rotate(0deg)";
    cahngeDivBackgorund.style.background = "none";
    cahngeDivBackgorund.style.border = "1px solid #bf7e06";

    let changeIconColor = document.getElementById("serviceIcon1");
    changeIconColor.style.color = "#212529";
}
function serviceDivAniamtionOut2() {
    let cahngeDivBackgorund = document.getElementById("serviceDiv2");
    cahngeDivBackgorund.style.transform = "rotate(0deg)";
    cahngeDivBackgorund.style.background = "none";
    cahngeDivBackgorund.style.border = "1px solid #bf7e06";

    let changeIconColor = document.getElementById("serviceIcon2");
    changeIconColor.style.color = "#212529";
}
function serviceDivAniamtionOut3() {
    let cahngeDivBackgorund = document.getElementById("serviceDiv3");
    cahngeDivBackgorund.style.transform = "rotate(0deg)";
    cahngeDivBackgorund.style.background = "none";
    cahngeDivBackgorund.style.border = "1px solid #bf7e06";

    let changeIconColor = document.getElementById("serviceIcon3");
    changeIconColor.style.color = "#212529";
}



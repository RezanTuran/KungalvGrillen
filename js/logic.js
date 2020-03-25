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
            idTd.classList = "pizzaId";

            pizzaImgTd.src = '../img/product_img/' + pizzaImg;
            idTd.innerText = id;
            pizzaNrTd.innerText = pizzaNr;
            pizzaNameTd.innerText = pizzaName;
            pizzaIngredienserTd.innerText = pizzaIngredienser;
            pizzaPriceTd.innerText = pizzaPrice + ":-";
            
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

// ### Serach Function For AdminPanel ### //
$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
      const value = $(this).val().toLowerCase();
      $("#table tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


  // Counter Rows Animations //

function counterRowAnimation1() {
    let cahngeCounterRow1 = document.getElementById("counterRow1");
    cahngeCounterRow1.style.transform = "rotate(50deg)";
    cahngeCounterRow1.style.transition = "0.5s";
    cahngeCounterRow1.style.background = "#fac564";

    let changeCounterIconColor = document.getElementById("changeCounterIconColor1");
    changeCounterIconColor.style.color = "#212529";
}

function counterRowAnimation1Out() {
    let cahngeCounterRow1 = document.getElementById("counterRow1");
    cahngeCounterRow1.style.transform = "rotate(0deg)";
    cahngeCounterRow1.style.background = "none";
    cahngeCounterRow1.style.border = "1px solid #fac564";

    let changeCounterIconColor = document.getElementById("changeCounterIconColor1");
    changeCounterIconColor.style.color = "#fac564";
}

function counterRowAnimation2() {
    let cahngeCounterRow2 = document.getElementById("counterRow2");
    cahngeCounterRow2.style.transform = "rotate(50deg)";
    cahngeCounterRow2.style.transition = "0.5s";
    cahngeCounterRow2.style.background = "#fac564";
    
    let changeCounterIconColor = document.getElementById("changeCounterIconColor2");
    changeCounterIconColor.style.color = "#212529";
}

function counterRowAnimation2Out() {
    let cahngeCounterRow2 = document.getElementById("counterRow2");
    cahngeCounterRow2.style.transform = "rotate(0deg)";
    cahngeCounterRow2.style.background = "none";
    cahngeCounterRow2.style.border = "1px solid #fac564";

    let changeCounterIconColor = document.getElementById("changeCounterIconColor2");
    changeCounterIconColor.style.color = "#fac564";
}

function counterRowAnimation3() {
    let counterRowAnimation3 = document.getElementById("counterRow3");
    counterRowAnimation3.style.transform = "rotate(50deg)";
    counterRowAnimation3.style.transition = "0.5s";
    counterRowAnimation3.style.background = "#fac564";
    
    let changeCounterIconColor = document.getElementById("changeCounterIconColor3");
    changeCounterIconColor.style.color = "#212529";
}

function counterRowAnimation3Out() {
    let cahngeCounterRow3 = document.getElementById("counterRow3");
    cahngeCounterRow3.style.transform = "rotate(0deg)";
    cahngeCounterRow3.style.background = "none";
    cahngeCounterRow3.style.border = "1px solid #fac564";

    let changeCounterIconColor = document.getElementById("changeCounterIconColor3");
    changeCounterIconColor.style.color = "#fac564";
}

function counterRowAnimation4() {
    let counterRowAnimation4 = document.getElementById("counterRow4");
    counterRowAnimation4.style.transform = "rotate(50deg)";
    counterRowAnimation4.style.transition = "0.5s";
    counterRowAnimation4.style.background = "#fac564";
    
    let changeCounterIconColor = document.getElementById("changeCounterIconColor4");
    changeCounterIconColor.style.color = "#212529";
}

function counterRowAnimation4Out() {
    let cahngeCounterRow4 = document.getElementById("counterRow4");
    cahngeCounterRow4.style.transform = "rotate(0deg)";
    cahngeCounterRow4.style.background = "none";
    cahngeCounterRow4.style.border = "1px solid #fac564";

    let changeCounterIconColor = document.getElementById("changeCounterIconColor4");
    changeCounterIconColor.style.color = "#fac564";
}



function loadFunction() {
    let preLoader = document.getElementById("loading");
    let hideBody = document.getElementById("wrapp");

    hideBody.style.display = "none";
    setTimeout(function(){ preLoader.style.display = "none"; }, 3000);
    setTimeout(function(){ hideBody.style.display = "block"; }, 3000);
}
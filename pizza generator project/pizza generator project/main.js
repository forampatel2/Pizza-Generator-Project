// Pizza Generator

// HTML Elements
let pizzaContainerEl = document.getElementById("pizza-container");
let addtoppingBtnEl = document.getElementById("add-topping-btn");
let toppingsSelectEl = document.getElementById("topping-select");
let selectedCrustEl = document.getElementById("selectedCrustImg");
let crustSelectEl = document.getElementById("crust-select");
let chooseCrustBtnEl = document.getElementById("choose-crust-btn");
let removeToppingBtnEl = document.getElementById("remove-topping-btn")
let clearAllBtnEl = document.getElementById("clear-all-btn");

// Global Variables
let toppings = [];
let selectedCrust = "classic";
let crust = ["thin-crust", "pan-crust", "gf-crust"];

// Alert Prompt
alert("Welcome! Please proceed to create your pizza :))") ;
 
drawPizza();
function drawPizza() {
    // Add crust image
        pizzaContainerEl.innerHTML = `<img src="images/${selectedCrust}.png">`;
    // Add topping image
    for (let i = 0; i < toppings.length; i++) {
        pizzaContainerEl.innerHTML  += `<img src="images/${toppings[i]}.png">`;
    }
}

// Click Events
addtoppingBtnEl.addEventListener("click", addTopping);
removeToppingBtnEl.addEventListener("click", removeTopping);
chooseCrustBtnEl.addEventListener("click", chooseCrust);
clearAllBtnEl.addEventListener("click", clearAll);


function addTopping() {
    toppings.push(toppingsSelectEl.value);
    drawPizza();
}

function removeTopping() {
    toppings.pop();
    drawPizza();
}

function chooseCrust() {
    selectedCrust = crustSelectEl.value;
    drawPizza();
}

function clearAll() {
    pizzaContainerEl.innerHTML = ""; 
}
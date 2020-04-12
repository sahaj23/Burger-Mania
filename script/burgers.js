class Burger {
  constructor(type, category, price, quantity) {
    this.type = type;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}
let burgers = new Array();

function onAddToCart(num) {
  type = document.getElementById("type" + num).innerHTML;
  category = document.getElementById("category" + num).value;
  quantity = document.getElementById("quantity" + num).value;
  if (category === "Veg") {
    price = 100;
  } else if (category === "Egg") {
    price = 150;
  } else {
    price = 200;
  }
  document.getElementById("quantity" + num).value = "";
  document.getElementById("addbtn" + num).disabled = true;
  let burger = new Burger(type, category, price, quantity);
  burgers.push(burger);
  console.log(burgers);
  console.log(JSON.stringify(burgers));
}

function validate(num) {
  var val = parseInt(document.getElementById("quantity" + num).value, 10);
  if (val > 0 && val < 6) {
    document.getElementById("addbtn" + num).disabled = false;
  } else {
    document.getElementById("addbtn" + num).disabled = true;
  }
}
function sel(num) {
  var selectedCategory = document.getElementById("category" + num).value;
  if (selectedCategory === "Veg") {
    document.getElementById("price" + num).innerText = "X 100";
  } else if (selectedCategory === "Egg") {
    document.getElementById("price" + num).innerText = "X 150";
  } else {
    document.getElementById("price" + num).innerText = "X 200";
  }
}

function viewcart() {
  window.localStorage.setItem("burgers", JSON.stringify(burgers));
  window.location.href = "mycart.html";
}

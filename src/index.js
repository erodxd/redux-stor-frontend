const carouselTag = document.querySelector('.carousel')
const endpoint = 'http://localhost:3000/api/v1/products/'
const cardRowDiv = document.querySelector('.row')
const categoryTag = document.querySelector('.categories')
// let  user = {
//   id: 7,
//   email: "yaBoy@gmail.com"
//   }
// let loggedInUser =  {
//   id: 7,
//   email: "yaBoy@gmail.com"
//   }
let user = null
let loggedInUser = null
const cartEnpoint = `http://localhost:3000/api/v1/carts/`
const usersEnpoint = `http://localhost:3000/api/v1/users/`
const trueTotal = 0;

////////////////////////////////////
//Loads All Products
///////////////////////////////////
function loadProducts(){
  fetch(endpoint)
    .then(res => res.json())
    .then(data => data.forEach(putProductOnCarousel))
}

function loadProductCards(){
  fetch(endpoint)
    .then(res => res.json())
    .then(data => data.forEach(putProductOnCard))
}
////////////////////////////////////
//Loads A Product
///////////////////////////////////
function findProduct(cart, user){
  console.log(cart)
  fetch(endpoint+`${cart.product_id}`)
  .then(res => res.json())
  .then(data =>{
    let currProduct  = new Product(data)
    cart.renderCartCard(user,currProduct)
  })
}

////////////////////////////////////
//Slap The Images On the Carousel
///////////////////////////////////
function putProductOnCarousel(product){
  const newProduct = new Product(product)
  newProductTag = newProduct.renderProductItem()
  carouselTag.append(newProductTag)

  let imgTag = document.querySelector(`.caro-img-${product.id}`)
  

  imgTag.addEventListener("click",()=>{
    productShowPage(newProduct)
  })

  let elems = document.querySelectorAll('.carousel');
  let instances = M.Carousel.init(elems);
}

function productShowPage(product){
  // debugger
  product.renderProductDetails()
}

function productCards(product){
  product.renderIndivProductCardDetails()
}

////////////////////////////////////
//Slap The Images On the Cards
///////////////////////////////////
<<<<<<< HEAD

=======
>>>>>>> 31c45ad274c16da769618d2ef7ef18a767dd023e
function putProductOnCard(product){
  const newProduct = new Product(product)
  newProductTag = newProduct.renderIndivProductCardDetails()
  cardRowDiv.appendChild(newProductTag)  
}

function putCategorieOnCard(product){
  const newProduct = new Product(product)
  newProductTag = newProduct.renderIndivProductCardDetails()
   cardRowDiv.innerHTML = ""
   //debugger
   cardRowDiv.appendChild(newProductTag)
}

let rowTag = document.querySelector('.row')
  rowTag.addEventListener('click', (event) => {
    if (event.target.className === 'product-image') {
     return productShowPage(Product.findById(parseInt(event.target.dataset.id)))
    }  
  })


////////////////////////////////////
//Show product by category
///////////////////////////////////
categoryTag.addEventListener('click', (event) => {
  if (event.target.className === 'shirt') {
      fetch(endpoint)
      .then(res => res.json())
      .then(data => filterProduct(data))
  }
})

function filterProduct(data){
  let shirts = data.filter(data => data.categorie === 'shirt')
  //console.log(shirts)
  shirts.forEach((shirt) => {
    console.log(shirt)
    cardRowDiv.innerHTML += ""
    debugger
    cardRowDiv.innerHTML = renderIndivProductCardDetails(shirt)
  })
}

function renderIndivProductCardDetails(shirt){
  const div = document.createElement("div")
  div.className = "col s4 m4 "
  return div.innerHTML = `<div class="card" data-categorie="${shirt.categorie}">
  <div class="card-image">
    <img class="product-image" data-id="${shirt.id}" src="${shirt.url}">
  </div>
  <div class="card-content">
    <h4>$${shirt.price}</h4>
  </div>
  <div class="card-action">
    <h5>${shirt.name}</h5>
  </div>
</div>`
};
//////////////////////////////////////
//Log In User
///////////////////////////////////////
function logInUser(product){
  event.preventDefault()
  const quantity = document.querySelector(".quantity-form").value
  if (user === null)  {
    guestShopper(product)
  } else {
    createCart(loggedInUser,product)
  }
}

///////////////////////////////////////
//Create Cart
///////////////////////////////////////
function createCart(user,product){
  const quantity = document.querySelector(".quantity-form").value
  if(quantity < 1){
    return swal("Mission Failed", "Fam You Wanna Buy 0?", "error")
  }
  let cart = {
    user_id:user.id,
    product_id:product.id,
    quantity:quantity
  }
  fetch(cartEnpoint,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(cart)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let newCartItem = new Cart(data)
    newCartItem.renderCart(user, product)
  })
}

///////////////////////////////////////
//Create User
///////////////////////////////////////
function createUser(user,product){
  fetch(usersEnpoint, {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {
    loggedInUser = data
    createCart(data,product)
  })
}

///////////////////////////////////////
//Guest User With Swall 
///////////////////////////////////////
function guestShopper(product){
  var alerts = [];

window.alert = function() {
  var alert = {
    type: arguments[1],
    title: arguments[0]
  };
  
  alerts.push(alert);
}

window.confirm = function (message, callback, caption) {
  var confirm = {
    title: message,
    showCancelButton: true
  };
  alerts.push(confirm);
};

alert('Enter Your Email To Add To Cart');

$(document).ready(function() {
  swal({
    text: "Enter Your Email To Add To Cart",
    content: "input",
    button: {
      text: "Send Dat",
      closeModal: true,
    },
  })
  .then(email => {
    if(email.match(/\w+@\w+.(com|gov|edu)/)){
       user = {email:email}
       createUser(user,product)
    } else {
      swal("Mission Failed", "Not a ValidEmail@fam.com", "error");
    }
  })
});
}

///////////////////////////////////////
//Total
///////////////////////////////////////
function totalFinder(cost){
  trueTotal += cost
}

///////////////////////////////////////
//Toggle SideBar
///////////////////////////////////////

function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}
///////////////////////////////////
//Load Scripts For Site
///////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadProductCards();

});


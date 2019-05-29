const carouselTag = document.querySelector('.carousel')
const endpoint = 'http://localhost:3000/api/v1/products/'
const cardTag = document.querySelector('.card')
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
    .then(data => data.forEach(productCard))
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
  product.renderProductDetails()
}

function productCard(product){
  const newProduct = new Product(product)
  newProductTag = newProduct.renderProductItem()
  cardTag.append(newProductTag)

  let imgTag = document.querySelector(`.caro-img-${product.id}`)
  
  imgTag.addEventListener("click",()=>{
    productShowPage(newProduct)
  })
}


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
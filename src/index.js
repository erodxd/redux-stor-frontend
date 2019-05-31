const carouselTag = document.querySelector('.carousel')
const endpoint = 'http://localhost:3000/api/v1/products/'
const cardRowDiv = document.querySelector('.row')
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

function putProductOnCard(product){
  const newProduct = new Product(product)
  newProductTag = newProduct.renderIndivProductCardDetails()
  cardRowDiv.appendChild(newProductTag)  

  let rowTag = document.querySelector('.row')
  rowTag.addEventListener('click', (event) => {
    console.log('you clicked the image!')
    if (event.target.className === 'card-image') {
      console.log('you clicked')
      productShowPage(newProduct)
    }
    
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
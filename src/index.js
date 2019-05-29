const carouselTag = document.querySelector('.carousel')
const endpoint = 'http://localhost:3000/api/v1/products/'
////////////////////////////////////
//Loads All Products
///////////////////////////////////
function loadProducts(){
  fetch(endpoint)
    .then(res => res.json())
    .then(data => data.forEach(putProductOnCarousel))
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


function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
}
///////////////////////////////////
//Load Scripts For Site
///////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    loadProducts()

});
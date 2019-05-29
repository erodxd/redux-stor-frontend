const carouselTag = document.querySelector('.carousel')

////////////////////////////////////
//Loads All Products
///////////////////////////////////
function loadProducts(){
  const endpoint = 'http://localhost:3000/api/v1/products';
  fetch(endpoint)
    .then(res => res.json())
    .then(data => data.forEach(putProductOnCarousel))
}

////////////////////////////////////
//Slap The Images On the Carousel
///////////////////////////////////
function putProductOnCarousel(product){
  const newProduct = new Product(product)
  carouselTag.innerHTML += (newProduct.renderProductItem())

  let elems = document.querySelectorAll('.carousel');
  let instances = M.Carousel.init(elems);
}

///////////////////////////////////
//Load Scripts For Site
///////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    loadProducts()

});
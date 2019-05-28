
    const divTag = document.createElement('div')
    divTag.className = 'products-list';
    document.body.appendChild(divTag);

    const carouselTag = document.querySelector('.carousel')
    
    
      
    
    
    //console.log(carouselTag)


    
    const app = new App();
    app.attachDivEventListeners(divTag);

    const loadProducts = () => {
    const endpoint = 'http://localhost:3000/api/v1/products';
    fetch(endpoint)
    .then(res => res.json())
    .then((products) => {
      products.forEach((product) => {
          //console.log(product)
        const newProduct = new Product(product)
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, options);
          //console.log(product.id)
          //divTag.innerHTML += createNoteHtml(product)
          //const createCarouselHTML = (product) => {
            //return `<a class="carousel-item" href="#${product.id}!"><img src="${product.url}"></a>`
           //};
          //carouselTag.innerHTML += createCarouselHTML(product)
        carouselTag.innerHTML += (newProduct.renderProductItem());
      });
    });
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      loadProducts()
  });

    

    









   //end of DOMContentLoaded 
  
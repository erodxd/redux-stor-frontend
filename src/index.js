document.addEventListener('DOMContentLoaded', () => {
  //console.log('index rendered')
    // remember that the route our real backend would be 'http://localhost:3000/api/v1/products' whereas here we'll make the request to our json-server non-namespaced routes 
        
    const divTag = document.createElement('div')
    divTag.className = 'products-list';
    document.body.appendChild(divTag);

    const carouselTag = document.querySelector('.carousel')
    
    
    //console.log(carouselTag)

    //var elems = document.querySelectorAll('.carousel');
    //var instances = M.Carousel.init(elems, options);
    
    const app = new App();
    app.attachDivEventListeners(divTag);

    const endpoint = 'http://localhost:3000/api/v1/products';
    fetch(endpoint)
    .then(res => res.json())
    .then((products) => {
      products.forEach((product) => {
          //console.log(product)
        //const newProduct = new Product(product)
          //console.log(product.id)
          //divTag.innerHTML += createNoteHtml(product)
          const createCarouselHTML = (product) => {
            return `<a class="carousel-item" href="#${product.id}!"><img src="${product.url}"></a>`
           };
          carouselTag.innerHTML += createCarouselHTML(product)
        //carouselTag.innerHTML += newProduct.renderProductItem();
      });
    });

    

    









   //end of DOMContentLoaded 
  });
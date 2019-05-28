//document.addEventListener('DOMContentLoaded', () => {
  console.log('index rendered')
    // remember that the route our real backend would be 'http://localhost:3000/api/v1/products' whereas here we'll make the request to our json-server non-namespaced routes 
    

    
      const divTag = document.createElement('div')
      divTag.className = 'products-list';
      document.body.appendChild(divTag);
    
      const app = new App();
      app.attachEventListeners(divTag);
    

    // createNoteHtml = (product) => {
    //     return  `<li>
    //     <h3>${product.name}
    //       <button>edit</button>
    //     </h3>
    //   </li>`;
    // }

    

    const endpoint = 'http://localhost:3000/api/v1/products';
    fetch(endpoint)
    .then(res => res.json())
    .then((products) => {
        products.forEach((product) => {
          //console.log(product)
          const newProduct = new Product(product)
          //console.log(product.id)
          //divTag.innerHTML += createNoteHtml(product)
          
          divTag.innerHTML += newProduct.renderProductItem();
        });
        });
    









   //end of DOMContentLoaded 
  //});
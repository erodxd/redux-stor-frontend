class Product {
  constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.categorie = data.categorie;
      this.price = data.price;
      this.url = data.url;
      Product.all.push(this);
  }

  renderProductItem() {
    let aTag = document.createElement("a")
    aTag.className = "carousel-item"
    aTag.href = `#${this.id}!`
    let img = document.createElement("img")
    img.className = `caro-img-${this.id}`
    img.src = this.url
    aTag.appendChild(img)
    return aTag
}

renderProductDetails(){
  let div = document.querySelector(".show-panel")
  div.innerHTML = ""
  let innerDiv = document.createElement("div")
  innerDiv.className = "show-box"
  innerDiv.innerHTML = `<img class="materialboxed" width="25%" src="${this.url}">
  <div class="details">
    <h3>${this.name}</h3>
    <h5>Category: ${this.categorie}</h5>
    <h5>$${this.price}</h5>
    <form id="purchase-form">
    Quantity:<input type="number" name="quantity" class="quantity-form" min="1" max="99">
    <button class="btn cart-button" type="submit"><span>To Cart</span></button>
    <button class="btn wish-button"><span>WishList</span></button>
    </form>
  </div>`
  div.appendChild(innerDiv)
  


  let cartButton = document.querySelector(".cart-button")
  cartButton.addEventListener("click", ()=>{
     logInUser(this)
  })
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
}

renderIndivProductCardDetails(){
  const div = document.createElement("div")
  div.className = "col s4 m4"
  div.innerHTML = `<div class="card">
  <div class="card-image">
    <img class="bla" data-id="${this.id}" src="${this.url}">
  </div>
  <div class="card-content">
    <h4>$${this.price}</h4>
  </div>
  <div class="card-action">
    <h5>${this.name}</h5>
  </div>
</div>`
  return div
}

static findById(id) {
  return this.all.find(product => product.id === id);
}
}

Product.all = [];
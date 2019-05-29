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
      <button class="btn striped-shadow white"><span>To Cart</span></button>
    </div>`
    div.appendChild(innerDiv)
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  }
    renderUpdateForm() {
      return `
      <form`
    }
  static findById(id) {
    return this.all.find(product => product.id === id);
  }
}

Product.all = [];


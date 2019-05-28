class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.categorie = data.categorie;
        this.price = data.price;
        this.size = data.size;
        this.url = data.url;
        Product.all.push(this);
    }
    renderProductItem() {
    return `<a class="carousel-item" href="#${this.id}!"><img src="${this.url}"</a>`
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


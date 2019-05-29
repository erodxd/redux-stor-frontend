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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 655b497379df7a8d13f11811c028fc19b1cbbc0b
    //   return  `<li>
    //   <h3>${this.name}
    //     <button data-id=${this.id}>edit</button>
    //   </h3>
    // </li>`;
<<<<<<< HEAD
=======
=======
>>>>>>> brenden-williams
>>>>>>> 655b497379df7a8d13f11811c028fc19b1cbbc0b
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


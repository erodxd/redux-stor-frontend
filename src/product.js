class Product {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.categorie = data.categorie;
        this.price = data.price;
        this.size = data.size;
        this.img_url = data.url;
        Product.all.push(this);
    }
    renderProductItem() {
      return  `<li>
      <h3>${this.name}
        <button data-id=${this.id}>edit</button>
      </h3>
    </li>`;
  }
}
console.log('product loaded')


// export function renderProductItem(){
//   console.log('second function called')
// }

Product.all = [];


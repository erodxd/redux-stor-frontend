class Cart {
    constructor(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.product_id = data.product_id;
        this.quantity = data.quantity;
        Cart.all.push(this);
    }

    renderCart(user, product){
        const showPanel = document.querySelector(".show-panel")
        showPanel.innerHTML = ` 
        <div id="cart_layout_2">
            <h1>In Da Cart</h1>
        </div>`

        fetch(usersEnpoint+`${user.id}`)
        .then(res => res.json())
        .then(data => {
            data.carts.forEach((cart)=>{
                let currCart = new Cart(cart)
                findProduct(currCart, user)
            })
        })
        
    }
    renderCartCard(user, product) {
        this.total = parseInt(this.quantity) * parseInt(product.price)
        const cartCard = document.createElement("div")
        cartCard.innerHTML += `
        <div id="wrap">   
          <div class="cart_details">
            <div class="item">
              <h3>Item</h3>
              <div class="product_image">
                <img src="${product.url}"/>
              </div>
              <div class="product_details">
                <span>${product.name}</span>
              </div>
            </div>
            <div class="price">
              <h3>Price</h3>
              <div class="center">
                <span>$${product.price}</span>
              </div>
            </div>
            <div class="qty">
              <h3>Qty</h3>
              <div class="center">
                <input for="qty" type="number" value="${this.quantity}">
                </input>
              </div>
            </div>
            <div class="total">
              <h3>Total</h3>
              <div class="center">
                <span>$${this.total}</span>
              </div>
            </div>
            </div>
            <br>
          </div>`
        const showPanel = document.querySelector(".show-panel")
        showPanel.appendChild(cartCard)
        this.totalPrice += this.total
        this.renderCheckout(this)
    }

    renderCheckout(cart){
        const findDiv = document.getElementById("checkout-div")
        if(findDiv){
            findDiv.remove()
        }
        const showPanel = document.querySelector(".show-panel")
        const div = document.createElement("div")
        div.id = "checkout-div"
        div.innerHTML = `
        <div class="complete_cart">
            <div class="checkout">
            <div class="subtotal">
                <h2>Subtotal:</h2>
                <span class="finalprice">$${this.totalPrice}</span>
                <a class="refresh"><i class="fa fa-refresh"></i></a>
            </div>
            <div class="complete">
                <a class="button button-${this.id}">Checkout</a>
            </div>
        </div>
        </div>`
        showPanel.appendChild(div)

        const paymentButton = document.querySelector(`.button-${this.id}`)
        paymentButton.addEventListener("click",()=>{
            this.makeAPayment(this)
        })
    }
    
    makeAPayment(cart){
        const cartPayload = {
            id:this.id,
            user_id:this.user_id,
            product_id:this.product_id,
            quantity:this.quantity,
            paying:true
        }
        console.log(cartPayload)
        fetch(cartEnpoint+this.id,{
            method:"DELETE",
            header:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(cartPayload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })
}

    makeAPayment(cart){
        const cartPayload = {
            id:this.id,
            user_id:this.user_id,
            product_id:this.product_id,
            quantity:this.quantity,
            paying:true
        }
        console.log(cartPayload)
        fetch(cartEnpoint+this.id,{
            method:"DELETE",
            header:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(cartPayload)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
        })
    }



}

Cart.all = [];
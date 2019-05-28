class App {
    attachDivEventListeners(divTag) {
        divTag.addEventListener('click', event => {
            //console.log('you clicked!');
            const id = parseInt(event.target.dataset.id)
            const product = Product.findById(id);
            console.log(product)
        });
    }
    //attachCartUpdateEventListeners()
}

//console.log('app loaded')
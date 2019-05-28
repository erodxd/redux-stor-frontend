class App {
    attachEventListeners(divTag) {
        divTag.addEventListener('click', event => {
            //console.log('you clicked!');
            const id = parseInt(event.target.dataset.id)
            const product = Product.findById(id);
            console.log(product)
        });
    }
}

//console.log('app loaded')
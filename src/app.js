class App {
    attachEventListeners() {
        document.querySelector('#product-list').addEventListener('click', event => {
            console.log('you clicked the button')
        })
    }
}
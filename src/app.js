class App {
    attachEventListeners(divTag) {
        divTag.addEventListener('click', event => {
            console.log('you clicked!');
        });
    }
}

//console.log('app loaded')
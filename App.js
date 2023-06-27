class App {
    constructor(options){
        this.age = options.age

        // searching for components and load it to the page
        document.body.querySelectorAll('*').forEach((node) => {
            if (node instanceof HTMLUnknownElement) {
                this.loadhtml(node)
                this.loadjs(node)               
            }
        })
    }
    
    //load html content of component
    loadhtml(node){
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                node.innerHTML = xhr.responseText;
            }
        }
        xhr.open('GET', `./components/${node.tagName}.html`, true)
        xhr.send();
    }

    //load js for components
    loadjs(node){
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var script = document.createElement('script')

                script.innerHTML = xhr.response
                document.body.appendChild(script)
            }
        }
        xhr.open('GET', `./components/${node.tagName}.js`, true)
        xhr.send();
    }
}

export default App
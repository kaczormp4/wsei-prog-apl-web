export class App {
    
    Main(){
        this.container();
    }
    container(){
        const container: HTMLElement = document.createElement("div");
        container.className = "container";
        container.id = "container";
        container.innerHTML = "container";
        document.body.appendChild(container);   

    }
}

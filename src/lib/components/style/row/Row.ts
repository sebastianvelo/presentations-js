class Row extends HTMLElement {

    wrapper = (text: string) => {
        const wrapper = document.createElement("div");
        wrapper.textContent = JSON.parse(text).pepe;
        return wrapper;
    }

    connectedCallback() {
        const texts = this.getAttribute("texts").split(",");
        const sm = this.getAttribute("sm:hola");
        console.log(sm)
        this.style.display = 'flex';
        this.style.justifyContent = 'space-between';
        texts.forEach(text => this.appendChild(this.wrapper(text)));

    }
}

export default Row;
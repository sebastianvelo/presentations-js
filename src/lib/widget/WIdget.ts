import { appendStyle } from "../shared/RootStyle";

abstract class Widget<T> extends HTMLElement {
    
    protected state: T;

    protected abstract setState: () => void;
    protected abstract getStyle: () => string;

    protected setContent = (): void => {

    };

    protected onInit = (): void => {

    };

    connectedCallback() {
        setTimeout(() => {
            this.setState();
            this.setContent();
            appendStyle(this.getStyle());
            this.onInit();
        })
    }
}

export default Widget;
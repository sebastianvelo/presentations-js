declare abstract class Widget<T> extends HTMLElement {
    protected state: T;
    protected abstract setState: () => void;
    protected abstract getStyle: () => string;
    protected setContent: () => void;
    protected onInit: () => void;
    connectedCallback(): void;
}
export default Widget;

declare class PresentationBody extends HTMLElement {
    private state;
    static get observedAttributes(): string[];
    private init;
    private setState;
    private modifyChild;
    private modifyChildren;
    attributeChangedCallback(): void;
    connectedCallback(): void;
}
export default PresentationBody;

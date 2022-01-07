declare class Row extends HTMLElement {
    wrapper: (text: string) => HTMLDivElement;
    connectedCallback(): void;
}
export default Row;

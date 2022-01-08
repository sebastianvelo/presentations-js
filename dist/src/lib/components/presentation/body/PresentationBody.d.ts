import UnstyledWidget from "../../../widget/UnstyledWidget";
interface PresentationBodyState {
    slideActive?: number;
}
declare class PresentationBody extends UnstyledWidget<PresentationBodyState> {
    static get observedAttributes(): string[];
    protected setState: () => void;
    protected onInit: () => void;
    private modifyChild;
    private modifyChildren;
    attributeChangedCallback(): void;
}
export default PresentationBody;

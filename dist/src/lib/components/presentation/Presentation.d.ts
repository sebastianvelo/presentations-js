import Widget from "../../widget/WIdget";
export interface PresentationState {
    id: string;
    active: number;
    hideControls: boolean;
    autoplay: number;
    style: {
        [key: string]: string;
    };
    animation: {
        [key: string]: string;
    };
    transition: {
        [key: string]: string;
    };
}
declare class Presentation extends Widget<PresentationState> {
    protected setState: () => void;
    protected getStyle: () => string;
    protected setContent: () => void;
    protected onInit: () => void;
    private autoplay;
    private getBody;
    private setActiveSlide;
    private getSlidesCount;
    private changeSlide;
    private getControl;
}
export default Presentation;

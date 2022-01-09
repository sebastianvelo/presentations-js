import Widget from "../../widget/WIdget";
interface StyleableState {
    id?: string;
    bg?: string;
    text?: string;
    size: {
        width?: string;
        height?: string;
    };
    position?: {
        top?: string;
        right?: string;
        left?: string;
        bottom?: string;
    };
}
declare abstract class Styleable extends Widget<StyleableState> {
    protected setState: () => void;
    protected getStyle: () => string;
    protected onInit: () => void;
    private getPosition;
}
export default Styleable;

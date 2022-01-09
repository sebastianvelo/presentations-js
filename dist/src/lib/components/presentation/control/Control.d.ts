import Widget from "../../../widget/WIdget";
interface ControlState {
    next: boolean;
}
declare class Control extends Widget<ControlState> {
    protected setState: () => void;
    protected getStyle: () => string;
    protected setContent: () => void;
}
export default Control;

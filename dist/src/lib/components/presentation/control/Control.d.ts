import UnstyledWidget from "../../../widget/UnstyledWidget";
interface ControlState {
    next: boolean;
}
declare class Control extends UnstyledWidget<ControlState> {
    protected setState: () => void;
    protected setContent: () => void;
}
export default Control;

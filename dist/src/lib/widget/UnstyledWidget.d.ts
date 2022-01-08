import Widget from "./WIdget";
declare abstract class UnstyledWidget<T> extends Widget<T> {
    protected getStyle: () => string;
}
export default UnstyledWidget;

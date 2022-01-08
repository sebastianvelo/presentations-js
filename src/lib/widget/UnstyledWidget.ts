import Widget from "./WIdget";

abstract class UnstyledWidget<T> extends Widget<T> {

    protected getStyle = (): string => '';

}

export default UnstyledWidget;
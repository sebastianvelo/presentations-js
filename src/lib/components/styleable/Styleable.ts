import { appendStyle, getRootStyle } from "../../shared/RootStyle";
import StyleAttributes from "../../shared/StyleAttributes";
import StyleUnits from "../../shared/StyleUnits";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import StyleUtils from "../../utils/StyleUtils";
import Utils from "../../utils/Utils";
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

abstract class Styleable extends Widget<StyleableState> {

    protected setState = (): void => {
        this.state = {
            id: `s-salmon`,
            bg: this.getAttribute(StyleAttributes.Background),
            text: this.getAttribute(StyleAttributes.Text),
            size: {
                width: this.getAttribute(StyleAttributes.Width),
                height: this.getAttribute(StyleAttributes.Height),
            },
            position: {
                top: this.getAttribute(StyleAttributes.Top),
                right: this.getAttribute(StyleAttributes.Right),
                left: this.getAttribute(StyleAttributes.Left),
                bottom: this.getAttribute(StyleAttributes.Bottom),
            }
        }
    }

    protected getStyle = () => ''; /* WidgetStyleSheet.getStyleSheet([
        {
            rules: [
                {
                    selector: Utils.getIDSelector(this.state.id),
                    declarations: {
                        color: this.state.text,
                        background: StyleUtils.getBackground(this.state.bg),
                        width: StyleUtils.getValueUnit(this.state.size.width, StyleUnits.PERCENT),
                        height: StyleUtils.getValueUnit(this.state.size.height, StyleUnits.PERCENT),
                        top: StyleUtils.getValueUnit(this.state.position.top, StyleUnits.PX),
                        right: StyleUtils.getValueUnit(this.state.position.right, StyleUnits.PX),
                        left: StyleUtils.getValueUnit(this.state.position.left, StyleUnits.PX),
                        bottom: StyleUtils.getValueUnit(this.state.position.bottom, StyleUnits.PX),
                        position: this.getPosition(),
                    }
                }
            ],
        }
    ]);*/

    protected onInit = () => {
        this.setAttribute("id", this.state.id);
    }

    private getPosition = (): string => Object.values(this.state.position).filter(p => p).length ? 'absolute' : '';

}

export default Styleable;
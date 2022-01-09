import StyleUnits from "../../shared/StyleUnits";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import StyleUtils from "../../utils/StyleUtils";
import Utils from "../../utils/Utils";
import { PresentationState } from "./Presentation";

namespace PresentationUtils {

    export const getPresentationSelector = (state: PresentationState): string => Utils.getIDSelector(state.id);
    export const getSlideSelector = (state: PresentationState): string => `${getPresentationSelector(state)} w-slide`;
    export const getNextAnimationName = (state: PresentationState): string => `${state.transition.name}-${state.animation.side}`;
    export const getNextAnimation = (state: PresentationState): string => `${getNextAnimationName(state)} ${state.transition.duration}s`;

    export const getPresentationStyle = (state: PresentationState): WidgetStyleSheet.Rule => ({
        selector: getPresentationSelector(state),
        declarations: {
            background: StyleUtils.getBackground(state.style.bg),
            width: StyleUtils.getValueUnit(state.style.width, StyleUnits.PX),
            height: StyleUtils.getValueUnit(state.style.height, StyleUnits.PX),
        }
    });

    export const getSlideStyle = (state: PresentationState): WidgetStyleSheet.Rule => ({
        selector: getSlideSelector(state),
        declarations: {
            width: StyleUtils.getValueUnit(state.style.width, StyleUnits.PX),
            height: StyleUtils.getValueUnit(state.style.height, StyleUnits.PX),
        }
    });

    export const getNext = (state: PresentationState, max: number): number => state.active === max ? 0 : state.active + 1;
    export const getPrev = (state: PresentationState, max: number): number => state.active === 0 ? max : state.active - 1;

}

export default PresentationUtils;
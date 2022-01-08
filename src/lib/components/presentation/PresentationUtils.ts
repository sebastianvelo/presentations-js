import StyleUnits from "../../shared/StyleUnits";
import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import StyleUtils from "../../utils/StyleUtils";
import Utils from "../../utils/Utils";
import { PresentationState } from "./Presentation";

namespace PresentationUtils {

    export const getPresentationSelector = (state: PresentationState): string => Utils.getIDSelector(state.id);
    export const getSlideSelector = (state: PresentationState): string => `${getPresentationSelector(state)} w-slide[active]`;
    export const getAnimationName = (state: PresentationState): string => `${state.transition.name}-${state.id}`;
    export const getAnimation = (state: PresentationState): string => `${getAnimationName(state)} ${state.transition.duration}s`;

    export const getPresentationStyle = (state: PresentationState): WidgetStyleSheet.Rule => ({
        selector: getPresentationSelector(state),
        declarations: {
            background: StyleUtils.getBackground(state.style.bg),
            width: StyleUtils.getValueUnit(state.style.width, StyleUnits.PX),
            height: StyleUtils.getValueUnit(state.style.height, StyleUnits.PX),
        }
    });
    
    export const getSlideStyle = (state: PresentationState): WidgetStyleSheet.Rule => (
        {
            selector: getSlideSelector(state),
            declarations: {
                animation: getAnimation(state),
            }
        }
    );
    export const getKeyframes = (state: PresentationState): WidgetStyleSheet.Keyframe[] => [
        {
            name: getAnimationName(state),
            steps: [
                {
                    selector: "from",
                    declarations: {
                        [state.animation.side]: '100%'
                    }
                },
                {
                    selector: "to",
                    declarations: {
                        [state.animation.side]: '0'
                    }
                },
            ]
        }
    ]


    export const getNext = (state: PresentationState, max: number): number => state.active === max ? 0 : state.active + 1;
    export const getPrev = (state: PresentationState, max: number): number => state.active === 0 ? max : state.active - 1;

}

export default PresentationUtils;
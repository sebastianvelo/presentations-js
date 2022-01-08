import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import { PresentationState } from "./Presentation";
declare namespace PresentationUtils {
    const getPresentationSelector: (state: PresentationState) => string;
    const getSlideSelector: (state: PresentationState) => string;
    const getAnimationName: (state: PresentationState) => string;
    const getAnimation: (state: PresentationState) => string;
    const getPresentationStyle: (state: PresentationState) => WidgetStyleSheet.Rule;
    const getSlideStyle: (state: PresentationState) => WidgetStyleSheet.Rule;
    const getKeyframes: (state: PresentationState) => WidgetStyleSheet.Keyframe[];
    const getNext: (state: PresentationState, max: number) => number;
    const getPrev: (state: PresentationState, max: number) => number;
}
export default PresentationUtils;

import WidgetStyleSheet from "../../style/WidgetStyleSheet";
import { PresentationState } from "./Presentation";
declare namespace PresentationUtils {
    const getPresentationSelector: (state: PresentationState) => string;
    const getSlideSelector: (state: PresentationState) => string;
    const getNextAnimationName: (state: PresentationState) => string;
    const getNextAnimation: (state: PresentationState) => string;
    const getPresentationStyle: (state: PresentationState) => WidgetStyleSheet.Rule;
    const getSlideStyle: (state: PresentationState) => WidgetStyleSheet.Rule;
    const getNext: (state: PresentationState, max: number) => number;
    const getPrev: (state: PresentationState, max: number) => number;
}
export default PresentationUtils;

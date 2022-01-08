declare namespace WidgetStyleSheet {
    interface Declarations {
        [key: string]: string;
    }
    export interface Rule {
        selector: string;
        declarations: Declarations;
    }
    export interface Keyframe {
        name: string;
        steps: Rule[];
    }
    interface WidgetStyleScreen {
        minWidth?: number;
        maxWidth?: number;
        rules: Rule[];
        keyframes?: Keyframe[];
    }
    export const getStyleSheet: (screens: WidgetStyleScreen[]) => string;
    export const getStyleTag: (id: string, screens: WidgetStyleScreen[]) => HTMLStyleElement;
    export {};
}
export default WidgetStyleSheet;

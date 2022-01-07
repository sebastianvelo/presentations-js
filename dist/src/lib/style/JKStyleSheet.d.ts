declare namespace JKStyleSheet {
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
    interface JKStyleScreen {
        minWidth?: number;
        maxWidth?: number;
        rules: Rule[];
        keyframes?: Keyframe[];
    }
    export const getDeclaration: (key: string, value: string) => string;
    export const getDeclarations: (declarations: Declarations) => string;
    export const getDeclarationBlock: (declarations: Declarations) => string;
    export const getRule: (rule: Rule) => string;
    export const getRules: (rules: Rule[]) => string;
    export const getBreakpoint: (key: string, value: number) => string;
    export const getMinWidth: (minWidth: number) => string;
    export const getMaxWidth: (maxWidth: number) => string;
    export const getRange: (minWidth?: number, maxWidth?: number) => string;
    export const getKeyframe: (keyframe: Keyframe) => string;
    export const getKeyframes: (keyframes?: Keyframe[]) => string;
    export const getScreen: (screen: JKStyleScreen) => string;
    export const getStyleSheet: (screens: JKStyleScreen[]) => string;
    export const getStyleTag: (id: string, screens: JKStyleScreen[]) => HTMLStyleElement;
    export {};
}
export default JKStyleSheet;

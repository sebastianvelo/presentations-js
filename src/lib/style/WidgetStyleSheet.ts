import Utils from "../utils/Utils";

namespace WidgetStyleSheet {
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


    const getDeclaration = (key: string, value: string) => value ? `${Utils.camelCaseToKebabCase(key)}: ${value};` : '';
    const getDeclarations = (declarations: Declarations) => Object.entries(declarations).filter(d => d[1]).map(([key, value]) => getDeclaration(key, value)).join('\n\t');
    const getDeclarationBlock = (declarations: Declarations) => `{\n\t${getDeclarations(declarations)}\n}`;

    const getRule = (rule: Rule) => `${rule.selector} ${getDeclarationBlock(rule.declarations)}`;
    const getRules = (rules: Rule[]) => rules.map(getRule).join('\n');

    const getBreakpoint = (key: string, value: number) => value ? `(${key}: ${value}px)` : '';
    const getMinWidth = (minWidth: number) => getBreakpoint("min-width", minWidth);
    const getMaxWidth = (maxWidth: number) => getBreakpoint("max-width", maxWidth);
    const getRange = (minWidth?: number, maxWidth?: number) => `${getMinWidth(minWidth)} ${minWidth && maxWidth ? 'and' : ''} ${getMaxWidth(maxWidth)}`;

    const getKeyframe = (keyframe: Keyframe) => `\n@keyframes ${keyframe.name} {\n${getRules(keyframe.steps)}\n}\n`;
    const getKeyframes = (keyframes?: Keyframe[]) => keyframes ? keyframes.map(getKeyframe).join('\n') : '';

    const getScreen = (screen: WidgetStyleScreen) => {
        const body = `${getRules(screen.rules)} ${getKeyframes(screen.keyframes)}`;
        if (!screen.maxWidth && !screen.minWidth) return body;
        return `@media ${getRange(screen.minWidth, screen.maxWidth)} {
            ${body}
        }`;
    };
    export const getStyleSheet = (screens: WidgetStyleScreen[]) => screens.map(getScreen).join('\n\n');

    export const getStyleTag = (id: string, screens: WidgetStyleScreen[]) => {
        const style = document.createElement("style");
        style.setAttribute("id", id);
        style.innerHTML = getStyleSheet(screens);
        return style;
    };
}

export default WidgetStyleSheet;
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

    const isUpperCase = (letter: string): boolean => letter === letter.toUpperCase();
    const camelCaseToKebabCase = (camelCase: string): string => camelCase.split('').map(letter => isUpperCase(letter) ? `-${letter.toLowerCase()}` : letter).join('');

    export const getDeclaration = (key: string, value: string) => `${camelCaseToKebabCase(key)}: ${value};`;
    export const getDeclarations = (declarations: Declarations) => Object.entries(declarations).map(([key, value]) => getDeclaration(key, value)).join('\n\t');
    export const getDeclarationBlock = (declarations: Declarations) => `{\n\t${getDeclarations(declarations)}\n}`;

    export const getRule = (rule: Rule) => `${rule.selector} ${getDeclarationBlock(rule.declarations)}`;
    export const getRules = (rules: Rule[]) => rules.map(getRule).join('\n');

    export const getBreakpoint = (key: string, value: number) => value ? `(${key}: ${value}px)` : '';
    export const getMinWidth = (minWidth: number) => getBreakpoint("min-width", minWidth);
    export const getMaxWidth = (maxWidth: number) => getBreakpoint("max-width", maxWidth);
    export const getRange = (minWidth?: number, maxWidth?: number) => `${getMinWidth(minWidth)} ${minWidth && maxWidth ? 'and' : ''} ${getMaxWidth(maxWidth)}`;

    export const getKeyframe = (keyframe: Keyframe) => `\n@keyframes ${keyframe.name} {\n${getRules(keyframe.steps)}\n}\n`;
    export const getKeyframes = (keyframes?: Keyframe[]) => keyframes ? keyframes.map(getKeyframe).join('\n') : '';

    export const getScreen = (screen: WidgetStyleScreen) => {
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
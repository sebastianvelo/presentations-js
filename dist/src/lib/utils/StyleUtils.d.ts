import StyleUnits from "../shared/StyleUnits";
declare namespace StyleUtils {
    const getBackground: (bg: string) => string;
    const getValueUnit: (value: string, unit: StyleUnits) => string;
}
export default StyleUtils;

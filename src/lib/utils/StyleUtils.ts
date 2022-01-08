import StyleUnits from "../shared/StyleUnits";
import Utils from "./Utils";

namespace StyleUtils {

    export const getBackground = (bg: string): string => {
        if (Utils.isAPath(bg))
            return `url("${bg}")`;
        return bg;
    }

    export const getValueUnit = (value: string, unit: StyleUnits) => value && `${value}${unit}`;
}

export default StyleUtils;
declare namespace Utils {
    const isUpperCase: (letter: string) => boolean;
    const camelCaseToKebabCase: (camelCase: string) => string;
    const generateID: () => number;
    const isAPath: (ev: string) => boolean;
    const getIDSelector: (id: string) => string;
}
export default Utils;

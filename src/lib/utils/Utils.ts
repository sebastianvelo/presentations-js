namespace Utils {

    export const isUpperCase = (letter: string): boolean => letter === letter.toUpperCase();

    export const camelCaseToKebabCase = (camelCase: string): string => camelCase.split('').map(letter => isUpperCase(letter) ? `-${letter.toLowerCase()}` : letter).join('');

    export const generateID = () => Date.now() - Math.floor(Math.random() * 5000);

    export const isAPath = (ev: string) => ev.startsWith("http") || ev.startsWith(".");

    export const getIDSelector = (id: string) => `#${id}`;
}

export default Utils;
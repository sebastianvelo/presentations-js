export const rootStyleId = "root-style";

export const getRootStyle = () => document.getElementById(rootStyleId);
export const appendStyle = (style: string) => getRootStyle().append(style);
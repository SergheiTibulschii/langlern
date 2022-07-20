import appTokens from '.';

export type ColorVariants = keyof typeof appTokens.colors;
export type Colors = typeof appTokens.colors;
export type FontFamily = keyof typeof appTokens.fontFamily;
export type Screens = keyof typeof appTokens.screens;

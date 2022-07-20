import appTokens from 'infrastructure/appTokens';
import { Theme } from './types';

export const lightTheme: Theme = {
	colors: {
		primary: appTokens.colors.violet[500],
		secondary: '',
		tertiary: '',
		danger: '',
		warning: '',
		success: '',
		bgPrimary: appTokens.colors.white,
		bgSecondary: '',
		bgTertiary: '',
		textPrimary: appTokens.colors.black,
		border: appTokens.colors.zinc[700],
	},
	name: 'light',
};

export const darkTheme: Theme = {
	colors: {
		primary: appTokens.colors.violet[400],
		secondary: '',
		tertiary: '',
		danger: '',
		warning: '',
		success: '',
		bgPrimary: appTokens.colors.zinc[800],
		bgSecondary: appTokens.colors.zinc[600],
		bgTertiary: '',
		textPrimary: appTokens.colors.white,
		border: appTokens.colors.zinc[400],
	},
	name: 'dark',
};

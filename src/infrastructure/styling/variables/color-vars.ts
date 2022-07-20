import appTokens from 'infrastructure/appTokens';
import { Theme } from 'infrastructure/theme/types';
import { generateColorVariables } from '../styling-utils';

const tokenColors = Object.entries(appTokens.colors).reduce<Record<string, string>>((acc, [color, colorValue]) => {
	if (typeof colorValue === 'string') {
		acc[color] = colorValue;
	} else {
		Object.entries(colorValue).forEach(([number, value]) => {
			acc[`${color}-${number}`] = value;
		});
	}

	return acc;
}, {});

export default function getColorVariables(theme: Theme) {
	return generateColorVariables({
		...tokenColors,
		...theme.colors,
	});
}

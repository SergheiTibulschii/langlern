import { toKebabCase } from 'infrastructure/utils/strings';

const generateColorVariables = (colors: Record<string, string>): string[] =>
	Object.entries(colors).reduce<string[]>((acc, [color, value]) => {
		return [...acc, `--clr-${toKebabCase(color)}: ${value};`];
	}, []);

const rem = (...values: number[]) => {
	return values.map((v) => `${v / 16}rem`).join(' ');
};

export { generateColorVariables, rem };

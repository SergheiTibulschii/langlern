export const toKebabCase = (str: string, delimeter = '-') => {
	return str.replace(/([A-Z])/g, `-$1`).toLowerCase();
};

import { darkTheme, lightTheme } from 'infrastructure/theme/theme';
import { Theme } from 'infrastructure/theme/types';
import { createContext, Dispatch, SetStateAction, useCallback, useContext, useMemo, useState } from 'react';
import { WithChildren } from 'types/common';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

interface ThemeContextType {
	theme: Theme;
	changeTheme: Dispatch<SetStateAction<Theme>>;
	toggleTheme: VoidFunction;
}
const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: WithChildren) => {
	const [theme, setTheme] = useState<Theme>(lightTheme);

	const changeTheme = useCallback(setTheme, [setTheme]);

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => (prevTheme.name === 'light' ? darkTheme : lightTheme));
	}, [setTheme]);

	const contextValue = useMemo(() => ({ theme, changeTheme, toggleTheme }), [theme, changeTheme, toggleTheme]);

	return (
		<ThemeContext.Provider value={contextValue}>
			<EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};

import { css, Global } from '@emotion/react';
import appTokens from 'infrastructure/appTokens';
import { useTheme } from 'infrastructure/contexts/ThemeContext';
import cssReset from './css-reset';
import fontfaces from './fontfaces';
import getColorVariables from './variables/color-vars';
import typographyVariables from './variables/typography-vars';

export default function GlobalStyles() {
	const { theme } = useTheme();

	return (
		<Global
			styles={css`
				:root {
					${getColorVariables(theme)}
					${typographyVariables}
				}

				${fontfaces}
				${cssReset}
	
                html,
                body {
					height: 100%;
					margin: 0;
					font-family: var(--ff-serif);
					background: var(--clr-bg-primary);
					transition: background ${appTokens.animationDuration.medium}s ${appTokens.bezier.main};
				}

				#root {
					height: 100%;
				}

				ul {
					list-style: none;
				}
			`}
		/>
	);
}

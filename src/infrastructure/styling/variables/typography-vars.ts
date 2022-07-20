import { css } from '@emotion/react';
import appTokens from 'infrastructure/appTokens';

export default css`
	--ff-serif: ${appTokens.fontFamily.serif}, serif;
	--ff-sans-serif: ${appTokens.fontFamily.sans}, sans-serif;
	--ff-mono: ${appTokens.fontFamily.mono};
`;

import PlayfairFontItalic from 'assets/fonts/Playfair-Display-latin-italic.woff2';
import PlayfairFont from 'assets/fonts/Playfair-Display-latin-regular.woff2';
import RalewayFont from 'assets/fonts/Raleway-latin-regular.woff2';
import RalewayFontItalic from 'assets/fonts/Raleway-latin-italic.woff2';
import MonotonFont from 'assets/fonts/Monoton-regular.woff2';
import { css } from '@emotion/react';

const PLAYFAIR_DISPLAY = css`
	@font-face {
		font-family: 'Playfair Display';
		font-style: normal;
		font-weight: 400 900;
		font-display: block;
		src: url(${PlayfairFont}) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Playfair Display';
		font-style: italic;
		font-weight: 400 900;
		font-display: block;
		src: url(${PlayfairFontItalic}) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}
`;

const RALEWAY = css`
	@font-face {
		font-family: 'Raleway';
		font-style: normal;
		font-weight: 100 700;
		font-display: block;
		src: url(${RalewayFont}) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Raleway';
		font-style: italic;
		font-weight: 100 700;
		font-display: block;
		src: url(${RalewayFontItalic}) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}
`;

const MONOTON = css`
	@font-face {
		font-family: 'Monoton';
		font-style: normal;
		font-weight: 400;
		font-display: block;
		src: url(${MonotonFont}) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
			U+2212, U+2215, U+FEFF, U+FFFD;
	}
`;

export default css`
	${PLAYFAIR_DISPLAY}
	${RALEWAY}
    ${MONOTON}
`;

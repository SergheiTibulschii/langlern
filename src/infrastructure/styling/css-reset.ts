import { css } from '@emotion/react';

export default css`
	html {
		box-sizing: border-box;
		-webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
		word-break: normal;
		-moz-tab-size: 4;
		tab-size: 4;
	}

	*,
	::before,
	::after {
		background-repeat: no-repeat;
		box-sizing: inherit;
	}

	::before,
	::after {
		text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
		vertical-align: inherit;
	}

	* {
		padding: 0;
		margin: 0;
	}

	/* # =================================================================
     # General elements
     # ================================================================= */

	hr {
		overflow: visible; /* Show the overflow in Edge and IE */
		height: 0; /* Add the correct box sizing in Firefox */
		color: inherit; /* Correct border color in Firefox. */
	}

	details,
	main {
		display: block;
	}

	summary {
		display: list-item;
	}

	small {
		font-size: 80%;
	}

	[hidden] {
		display: none; /* Add the correct display in IE */
	}

	abbr[title] {
		border-bottom: none; /* Remove the bottom border in Chrome 57 */
		/* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
		text-decoration: underline;
		text-decoration: underline dotted;
	}

	a {
		background-color: transparent; /* Remove the gray background on active links in IE 10 */
	}

	a:active,
	a:hover {
		outline-width: 0; /* Remove the outline when hovering in all browsers */
	}

	code,
	kbd,
	pre,
	samp {
		font-family: monospace, monospace;
	}

	pre {
		font-size: 1em;
	}

	b,
	strong {
		font-weight: bolder;
	}

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	table {
		border-color: inherit;
		text-indent: 0;
	}

	iframe {
		border-style: none;
	}

	input {
		border-radius: 0;
	}

	[type='number']::-webkit-inner-spin-button,
	[type='number']::-webkit-outer-spin-button {
		height: auto;
	}

	[type='search'] {
		-webkit-appearance: textfield;
		outline-offset: -2px;
	}

	[type='search']::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	textarea {
		overflow: auto;
		resize: vertical;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		font: inherit;
	}

	optgroup {
		font-weight: bold;
	}

	button {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	button,
	[type='button'],
	[type='reset'],
	[type='submit'],
	[role='button'] {
		cursor: pointer;
	}

	button::-moz-focus-inner,
	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	button:-moz-focusring,
	[type='button']::-moz-focus-inner,
	[type='reset']::-moz-focus-inner,
	[type='submit']::-moz-focus-inner {
		outline: 1px dotted ButtonText;
	}

	button,
	html [type='button'],
	[type='reset'],
	[type='submit'] {
		-webkit-appearance: button;
	}

	button,
	input,
	select,
	textarea {
		background-color: transparent;
		border-style: none;
	}

	a:focus,
	button:focus,
	input:focus,
	select:focus,
	textarea:focus {
		outline-width: 0;
	}

	/* Style select like a standard input */
	select {
		-moz-appearance: none; /* Firefox 36+ */
		-webkit-appearance: none; /* Chrome 41+ */
	}

	select::-ms-expand {
		display: none; /* Internet Explorer 11+ */
	}

	select::-ms-value {
		color: currentColor; /* Internet Explorer 11+ */
	}

	legend {
		border: 0;
		color: inherit;
		display: table;
		max-width: 100%;
		white-space: normal;
		max-width: 100%;
	}

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		color: inherit;
		font: inherit;
	}

	[disabled] {
		cursor: default;
	}

	img {
		border-style: none;
	}

	/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
	progress {
		vertical-align: baseline;
	}

	[aria-busy='true'] {
		cursor: progress;
	}

	[aria-controls] {
		cursor: pointer;
	}

	[aria-disabled='true'] {
		cursor: default;
	}

	svg {
		fill: currentColor;
	}
`;

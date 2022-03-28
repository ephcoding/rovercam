const PALETTE = {
	black: "rgb(0,0,0)",
	blue: "rgb(0,102,255)",
	clear: "rgba(0,0,0,0)",
	green: "rgb(0,255,0)",
	grey: "rgb(102,102,102)",
	orange: "rgb(255,153,0)",
	pink: "rgb(255,102,255)",
	purple: "rgb(153,0,255)",
	red: "rgb(255,51,0)",
	white: "rgb(255,255,255)",
	yellow: "rgb(255,255,0)",
};

// TODO: create web-safe variant helper to use in color-map
// 'darker' / 'lighter' shades would dynamically change with changes to PALETTE.js
// HEX:	0		3		6		9		C		F
// RGB:	0		51	102	153	204	255

const makeColorVariant = (rgbColorAsString, variant) => {};

export const COLORS = {
	// core
	primary: PALETTE.orange,
	secondary: PALETTE.blue,
	accent: PALETTE.blue,
	clear: PALETTE.clear,
	// typography
	backgroundDK: PALETTE.black,
	backgroundLT: PALETTE.white,
	textDIM: PALETTE.grey,
	textDK: PALETTE.black,
	textLT: PALETTE.white,
	// utilities
	clear: "rgba(0,0,0,0)",
	line: PALETTE.grey,
	msgDanger: PALETTE.red,
	msgError: PALETTE.red,
	msgInfo: PALETTE.green,
	msgSuccess: PALETTE.green,
	msgWarning: PALETTE.orange,
};

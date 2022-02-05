import { palette } from "./palette";

// TODO: create web-safe variant helper to use in color-map
// 'darker' / 'lighter' shades would dynamically change with changes to palette.js
// HEX:	0		3		6		9		C		F
// RGB:	0		51	102	153	204	255

const makeColorVariant = (rgbColorAsString, variant) => {};

export const COLORS = {
	// core
	primary: palette.orange,
	secondary: palette.blue,
	accent: palette.blue,
	// typography
	backgroundDK: palette.black,
	backgroundLT: palette.white,
	textDIM: palette.grey,
	textDK: palette.black,
	textLT: palette.white,
	// utilities
	clear: "rgba(0,0,0,0)",
	line: palette.greyLT,
	msgDanger: palette.red,
	msgError: palette.red,
	msgInfo: palette.green,
	msgSuccess: palette.green,
	msgWarning: palette.orange,
};

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

export const COLORS = {
	// core
	Primary: PALETTE.orange,
	Secondary: PALETTE.blue,
	Accent: PALETTE.blue,
	Clear: PALETTE.clear,
	Black: PALETTE.black,
	White: PALETTE.white,
	// typography
	background: {
		dark: PALETTE.black,
		light: PALETTE.white,
	},
	text: {
		dark: PALETTE.black,
		dim: PALETTE.grey,
		light: PALETTE.white,
	},
	// utilities
	message: {
		line: PALETTE.grey,
		danger: PALETTE.red,
		error: PALETTE.red,
		info: PALETTE.green,
		success: PALETTE.green,
		warning: PALETTE.orange,
	},
};

import { Platform } from "react-native";

/**
 * https://github.com/react-native-training/react-native-fonts
 */

export const FONTS = {
	primary: Platform.select({ ios: "Helvetica", android: "normal" }),
	secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),
};

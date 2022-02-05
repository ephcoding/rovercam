/**
 * https://github.com/react-native-training/react-native-fonts
 */
import { Platform } from "react-native";

export const TYPOGHRAPHY = {
	primary: Platform.select({ ios: "Helvetica", android: "normal" }),
	secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),
};

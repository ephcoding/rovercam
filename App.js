import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import AppStackNavigatorContainer from "./app/navigation/app-stack-navigator";
import MDX_THEME from "./app-theme";

export default App = () => {
	return (
		<ThemeProvider theme={MDX_THEME}>
			<SafeAreaProvider>
				<AppStackNavigatorContainer />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

import AppStackNavigatorContainer from "./app/navigation/app-stack-navigator";
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import THEME from "./app-theme";

const reactQuery = new QueryClient();

export default App = () => {
	return (
		<QueryClientProvider client={reactQuery}>
			<ThemeProvider theme={THEME}>
				<SafeAreaProvider>
					<AppStackNavigatorContainer />
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

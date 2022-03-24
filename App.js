import StackNavigator from "./app/navigation/stack-navigator";
import TabNavigator from "./app/navigation/top-tab-navigator";
// -----
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import { RNE_THEME } from "./app/styles/themes";
import { ThemeProvider } from "react-native-elements";
import { NativeBaseProvider } from "native-base";
// -----
const queryClient = new QueryClient();

export default App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={RNE_THEME}>
				<SafeAreaProvider>
					{/* <StackNavigator /> */}
					<TabNavigator />
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

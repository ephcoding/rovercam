import StackNavigator from "./app/navigation/stack-navigator";
import TabNavigator from "./app/navigation/top-tab-navigator";
// -----
import { prefetchQuery, QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import { RNE_THEME } from "./app/styles/themes";
import { ThemeProvider } from "react-native-elements";
// -----
import {
	prefetchLatestPhotosAll,
	prefetchManifestAll,
} from "./app/mars-photos-api/mars-rover-api";
const queryClient = new QueryClient();

export default App = () => {
	prefetchLatestPhotosAll();
	prefetchManifestAll();

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

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import { prefetchQuery, QueryClient, QueryClientProvider } from "react-query";
// -----
import StackNavigator from "./app/navigation/stack-navigator";
import TabNavigator from "./app/navigation/top-tab-navigator";
import { RNE_THEME } from "./app/theme";
import {
	prefetchLatestPhotosAll,
	prefetchManifestAll,
} from "./app/mars-photos-api";

// import * as SplashScreen from "expo-splash-screen";

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

import { useEffect } from "react";
// -----
import StackNavigator from "./app/navigation/stack-navigator";
import TabNavigator from "./app/navigation/top-tab-navigator";
// -----
import { prefetchQuery, QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import { RNE_THEME } from "./app/styles/themes";
import { ThemeProvider } from "react-native-elements";
import { NativeBaseProvider } from "native-base";
// -----
import {
	fetchAllManifests,
	fetchRoverManifest,
} from "./app/services/mars-rover-api";
const queryClient = new QueryClient();
import axios from "axios";

// TODO:
// [ ] prefetch all Rover manifests
// [ ] prefetch Latest Photos for all Rovers

export default App = () => {
	useEffect(() => {
		const test = async () => {
			const res = await fetchAllManifests();

			console.log(
				res[0].photo_manifest.name,
				res[1].photo_manifest.name,
				res[2].photo_manifest.name,
				res[3].photo_manifest.name
			);

			// await queryClient.prefetchQuery('manifests', fetchAllManifests)
		};

		test();
	}, []);

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

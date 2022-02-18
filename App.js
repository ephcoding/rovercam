// -----
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./app/navigation/app-stack-navigator";
// -----
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import HomeScreen from "./app/screens/HomeScreen";
import DisplayPhotosScreen from "./app/screens/DisplayPhotosScreen";
import DisplayLatestPhotosScreen from "./app/screens/DisplayLatestPhotosScreen";
import RoverScreen from "./app/screens/RoverScreen";
import SearchPhotosScreen from "./app/screens/SearchPhotosScreen";
// -----
import { RNE_THEME } from "./app/styles/themes";
import { ThemeProvider } from "react-native-elements";
// -----

const queryClient = new QueryClient();

export default App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={RNE_THEME}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName='Home'
							screenOptions={{
								headerStyle: {
									backgroundColor: "#000",
								},
								headerTintColor: "#fff",
								headerTitleStyle: {
									color: "#fff",
									fontSize: 20,
									fontWeight: "bold",
								},
							}}
						>
							<Stack.Screen
								name='Home'
								component={HomeScreen}
								options={{ title: "ROVERCAM" }}
							/>
							<Stack.Screen
								name='DisplayPhotos'
								component={DisplayPhotosScreen}
								options={({ route }) => ({
									title: route.params.title,
								})}
							/>
							<Stack.Screen
								name='DisplayLatestPhotos'
								component={DisplayLatestPhotosScreen}
								options={({ route }) => ({
									title: `LATEST ${route.params.rover} PHOTOS`,
								})}
							/>
							<Stack.Screen
								name='SearchPhotos'
								component={SearchPhotosScreen}
								options={({ route }) => ({
									title: route.params.title,
								})}
							/>
							<Stack.Screen
								name='Rover'
								component={RoverScreen}
								options={({ route }) => ({
									title: route.params.title,
								})}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

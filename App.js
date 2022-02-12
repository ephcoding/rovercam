// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./app/navigation/app-stack-navigator";
// REACT QUERY
import { QueryClient, QueryClientProvider } from "react-query";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// SCREENS
import HomeScreen from "./app/screens/HomeScreen";
import SearchPhotosScreen from "./app/screens/SearchPhotosScreen";
import DisplayPhotosScreen from "./app/screens/DisplayPhotosScreen";
import RoverInfoScreen from "./app/screens/RoverInfoScreen";
// THEME
import { ThemeProvider } from "react-native-elements";
import MDX_THEME from "./app-theme";

const reactQuery = new QueryClient();

export default App = () => {
	return (
		<QueryClientProvider client={reactQuery}>
			<ThemeProvider theme={MDX_THEME}>
				{/* <SafeAreaProvider> */}
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='Home'
						screenOptions={{
							headerStyle: {
								backgroundColor: "#000",
							},
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
							name='SearchPhotos'
							component={SearchPhotosScreen}
							options={({ route }) => ({
								title: route.params.title,
							})}
						/>
						<Stack.Screen
							name='RoverInfo'
							component={RoverInfoScreen}
							options={({ route }) => ({
								title: `${route.params.title} SPECS`,
							})}
						/>
					</Stack.Navigator>
				</NavigationContainer>
				{/* </SafeAreaProvider> */}
			</ThemeProvider>
		</QueryClientProvider>
	);
};

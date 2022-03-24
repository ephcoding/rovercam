import { AppNavigator } from "./app/navigation/app-stack-navigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// -----
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import HomeScreen from "./app/screens/HomeScreen";
import DisplayPhotosScreen from "./app/screens/DisplayPhotosScreen";
import DayPickerScreen from "./app/screens/DayPickerScreen";

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
					<AppNavigator />
					{/* <NavigationContainer>
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
								name='CameraPicker'
								component={CameraPickerScreen}
								options={({ route }) => ({
									title: "CAMERAS",
								})}
							/>
							<Stack.Screen
								name='DatePicker'
								component={DayPickerScreen}
								options={({ route }) => ({
									title: "EARTH DATE",
								})}
							/>
							<Stack.Screen
								name='DisplayPhotos'
								component={DisplayPhotosScreen}
								options={({ route }) => ({
									title: route.params.paramType,
								})}
							/>
							<Stack.Screen
								name='LatestPhotos'
								component={LatestPhotosScreen}
								options={({ route }) => ({
									title: `LATEST ${route.params.rover.toUpperCase()} PHOTOS`,
								})}
							/>
							<Stack.Screen
								name='Rover'
								component={RoverScreen}
								options={({ route }) => ({
									title: route.params.rover.toUpperCase(),
								})}
							/>
							<Stack.Screen
								name='SOLPicker'
								component={SOLPickerScreen}
								options={({ route }) => ({
									title: "MARTIAN SOL",
								})}
							/>
					</Stack.Navigator>
					</NavigationContainer> */}
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

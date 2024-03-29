// -----
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./app/navigation/app-stack-navigator";
// -----
import { QueryClient, QueryClientProvider } from "react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
// -----
import CameraPickerScreen from "./app/screens/CameraPickerScreen";
import DatePickerScreen from "./app/screens/DatePickerScreen";
import DisplayPhotosScreen from "./app/screens/DisplayPhotosScreen";
import HomeScreen from "./app/screens/HomeScreen";
import RoverScreen from "./app/screens/RoverScreen";
import SOLPickerScreen from "./app/screens/SOLPickerScreen";
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
								name='CameraPicker'
								component={CameraPickerScreen}
								options={({ route }) => ({
									title: "CAMERAS",
								})}
							/>
							<Stack.Screen
								name='DatePicker'
								component={DatePickerScreen}
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
							{/* <Stack.Screen
								name='LatestPhotos'
								component={LatestPhotosScreen}
								options={({ route }) => ({
									title: `LATEST ${route.params.rover.toUpperCase()} PHOTOS`,
								})}
							/> */}
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
					</NavigationContainer>
				</SafeAreaProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DisplayPhotosScreen from "../screens/DisplayPhotosScreen";
// import PickerScreen from '../screens/PickerScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerStyle: {
					backgroundColor: "#222",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					color: "#fff",
					fontSize: 20,
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			{/* <Stack.Screen name='Search' component={SearchScreen} /> */}
			{/* <Stack.Screen name='Photos' component={PhotosScreen} /> */}
		</Stack.Navigator>
	);
};

const StackNavigator = () => {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};

export default StackNavigator;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DisplayPhotosScreen from "../screens/DisplayPhotosScreen";
// import PickerScreen from '../screens/PickerScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator initialRouteName='Home'>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='DisplayPhotos' component={DisplayPhotosScreen} />
			{/* <Stack.Screen name="Picker" component={PickerScreen}/> */}
		</Stack.Navigator>
	);
};

export const AppNavigator = () => {
	<NavigationContainer>
		<AppStack />
	</NavigationContainer>;
};

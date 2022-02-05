import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Screen_CameraPhotos from "./app/screens/Screen_CameraPhotos";
import Screen_Home from "./app/screens/HomeScreen";
import RoverScreen from "./app/screens/RoverScreen";
/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
	{
		Home: { screen: Screen_Home },
		Rover: { screen: RoverScreen },
		CameraPhotos: { screen: Screen_CameraPhotos },
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "ROVERCAM",
		},
	}
);

export default createAppContainer(AppStackNavigator);

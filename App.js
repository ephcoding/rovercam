import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RoverProvider } from "./app/context/rover-context";
import Screen_CameraPhotos from "./app/screens/Screen_CameraPhotos";
import Screen_Home from "./app/screens/Screen_Home";
import Screen_Rover from "./app/screens/Screen_Rover";

/**
 * TODO: remove HomeScreen header
 */

const appStackNavigator = createStackNavigator(
	{
		Home: { screen: Screen_Home },
		Rover: {
			screen: Screen_Rover,
			navigationOptions: {
				title: "ROVER INFO",
			},
		},
		CameraPhotos: {
			screen: Screen_CameraPhotos,
			navigationOptions: {
				title: "CAMERA PHOTOS",
			},
		},
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "ROVERCAM",
		},
	}
);

const AppStackNavContainer = createAppContainer(appStackNavigator);

export default () => {
	return (
		<RoverProvider>
			<AppStackNavContainer />
		</RoverProvider>
	);
};

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RoverProvider } from "./app/context/rover-context";
import PhotosScreen from "./app/screens/Screen_CameraPhotos";
import HomeScreen from "./app/screens/Screen_Home";
import RoverScreen from "./app/screens/Screen_Rover";

/**
 * TODO: remove HomeScreen header
 */

const appStackNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Rover: {
			screen: RoverScreen,
			navigationOptions: {
				title: "ROVER INFO",
			},
		},
		Photos: {
			screen: PhotosScreen,
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

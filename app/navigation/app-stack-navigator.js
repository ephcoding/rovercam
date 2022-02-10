import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/Screen_Home";
import LatestPhotosScreen from "../screens/Screen_LatestPhotos";
import PhotosScreen from "../screens/Screen_CameraPhotos";
import RoverScreen from "../screens/Screen_Rover";

const stackNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		Rover: {
			screen: RoverScreen,
			navigationOptions: {
				title: "ROVER INFO",
			},
		},
		LatestPhotos: {
			screen: LatestPhotosScreen,
			navigationOptions: {
				title: "LATEST PHOTOS",
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

export default AppStackNavigator = createAppContainer(stackNavigator);

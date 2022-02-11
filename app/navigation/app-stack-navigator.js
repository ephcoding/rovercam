import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchPhotosScreen from "../screens/SearchPhotosScreen";
import DisplayPhotosScreen from "../screens/DisplayPhotosScreen";
import RoverInfoScreen from "../screens/RoverInfoScreen";

const stackNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		SearchPhotos: {
			screen: SearchPhotosScreen,
			navigationOptions: {
				title: "SEARCH PHOTOS",
			},
		},
		DisplayPhotos: {
			screen: DisplayPhotosScreen,
			navigationOptions: {
				title: "MARS PHOTOS",
			},
		},
		RoverInfo: {
			screen: RoverInfoScreen,
			navigationOptions: {
				title: "ROVER INFO",
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

export default AppStackNavigatorContainer = createAppContainer(stackNavigator);

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import MissionsScreen from "./app/screens/MissionsScreen";
import PhotoOptionsScreen from "./app/screens/PhotoOptionsScreen";

/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Missions: {
			screen: MissionsScreen,
			navigationOptions: {
				title: "ROVER MISSION STATS",
			},
		},
		Options: {
			screen: PhotoOptionsScreen,
			navigationOptions: {
				title: "ROVER PHOTO OPTIONS",
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

export default createAppContainer(AppStackNavigator);

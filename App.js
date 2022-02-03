import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MissionsScreen from "./src/screens/MissionsScreen";
import PhotoOptionsScreen from "./src/screens/PhotoOptionsScreen";

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

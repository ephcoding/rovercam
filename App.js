import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MissionsScreen from "./src/screens/MissionsScreen";
import PhotoOptionsScreen from "./src/screens/PhotoOptionsScreen";

const AppStackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Missions: MissionsScreen,
		Options: PhotoOptionsScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "ROVERCAM",
		},
	}
);

export default createAppContainer(AppStackNavigator);

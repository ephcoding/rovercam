import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import TestScreen from "./app/screens/TestScreen";
/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
	{ Home: HomeScreen, Test: TestScreen },
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "ROVERCAM",
		},
	}
);

export default createAppContainer(AppStackNavigator);

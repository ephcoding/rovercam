import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import CuriosityScreen from "./app/screens/CuriosityScreen";
import OpportunityScreen from "./app/screens/OpportunityScreen";
import PerseveranceScreen from "./app/screens/PerseveranceScreen";
import SpiritScreen from "./app/screens/SpiritScreen";
import MissionsScreen from "./app/screens/MissionsScreen";
import PhotoOptionsScreen from "./app/screens/PhotoOptionsScreen";

/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
	{
		Home: HomeScreen,
		Curiosity: CuriosityScreen,
		Opportunity: OpportunityScreen,
		Perseverance: PerseveranceScreen,
		Spirit: SpiritScreen,
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

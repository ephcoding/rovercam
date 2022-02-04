import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import CuriosityScreen from "./app/screens/CuriosityScreen";
import OpportunityScreen from "./app/screens/OpportunityScreen";
import PerseveranceScreen from "./app/screens/PerseveranceScreen";
import SpiritScreen from "./app/screens/SpiritScreen";

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
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "ROVERCAM",
		},
	}
);

export default createAppContainer(AppStackNavigator);

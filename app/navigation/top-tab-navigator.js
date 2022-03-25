import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import NewSearchScreen from "../screens/NewSearchScreen";
import NewPhotosScreen from "../screens/NewPhotosScreen";

const Tab = createMaterialTopTabNavigator();

const Navigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Rovers' component={HomeScreen} />
			<Tab.Screen name='Search' component={NewSearchScreen} />
			<Tab.Screen name='Photos' component={NewPhotosScreen} />
		</Tab.Navigator>
	);
};

const TabNavigator = () => {
	return (
		<NavigationContainer>
			<Navigator />
		</NavigationContainer>
	);
};

export default TabNavigator;

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createMaterialTopTabNavigator();

const Navigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Search' component={SearchScreen} />
			{/* <Tab.Screen name='Photos' component={PhotosScreen} /> */}
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

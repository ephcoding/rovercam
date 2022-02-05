import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./app/screens/HomeScreen";
import RoverScreen from "./app/screens/RoverScreen";
/**
 * TODO: remove HomeScreen header
 */

const AppStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Rover: { screen: RoverScreen },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "ROVERCAM",
    },
  }
);

export default createAppContainer(AppStackNavigator);

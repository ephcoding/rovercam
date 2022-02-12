import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const Stack = createNativeStackNavigator();
// 	{
// 		Home: { screen: HomeScreen },
// 		SearchPhotos: {
// 			screen: SearchPhotosScreen,
// 			navigationOptions: {
// 				title: "SEARCH PHOTOS",
// 			},
// 		},
// 		DisplayPhotos: {
// 			screen: DisplayPhotosScreen,
// 			navigationOptions: ({ navigation }) => {
// 				title: `${navigation.state.params.title}`;
// 			},
// 		},
// 		RoverInfo: {
// 			screen: RoverInfoScreen,
// 			navigationOptions: {
// 				title: "ROVER INFO",
// 			},
// 		},
// 	},
// 	{
// 		initialRouteName: "Home",
// 		defaultNavigationOptions: {
// 			title: "ROVERCAM",
// 		},
// 	}
// );

// export default AppStackNavigatorContainer = createAppContainer(stackNavigator);

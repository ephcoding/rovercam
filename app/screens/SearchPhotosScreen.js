import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { ButtonGroup, Text } from "react-native-elements";

const SearchPhotosScreen = ({ navigation, route }) => {
	console.log(">> NAVIGATION >>\n", navigation);
	console.log(">> ROUTE >>\n", route);

	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				style={S.imgContainer}
				source={route.params.img_url}
			>
				<Text>{JSON.stringify(route.params)}</Text>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	imgContainer: {
		flex: 1,
	},
	imgStyle: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: "#000",
		flex: 1,
	},
});

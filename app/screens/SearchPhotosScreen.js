import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { ButtonGroup, Switch, Text } from "react-native-elements";

const SearchPhotosScreen = ({ navigation, route }) => {
	console.log(">> NAVIGATION >>\n", navigation);
	console.log(">> ROUTE >>\n", route);

	const [isSwitched, setIsSwitched] = useState(false);

	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				style={S.imgContainer}
				source={route.params.img_url}
			>
				<Switch
					onValueChange={() => setIsSwitched(!isSwitched)}
					color={"#ff0"}
					ios_backgroundColor={"#777"}
					thumbColor={"#f60"}
					trackColor={{ false: "#777", true: "#0f0" }}
					value={isSwitched}
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default SearchPhotosScreen;

const S = StyleSheet.create({
	imgContainer: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
	imgStyle: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: "#000",
		flex: 1,
	},
});

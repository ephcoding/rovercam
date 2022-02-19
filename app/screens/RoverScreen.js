import { useFetchManifest } from "../hooks";
import {
	ImageBackground,
	Image,
	FlatList,
	StyleSheet,
	View,
} from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { SEARCH_PARAMS, IMG_PATHS } from "../constants/rovers";
import { COLORS, SIZES } from "../styles";
import List_Cameras from "../components/List_Cameras";
import NavButton from "../components/shared/Btn_Navigation";
import RoverContext from "../context/rover-context";
import RoverCard from "../components/RoverCard";
import { SafeAreaView } from "../components/shared";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverInfoScreen = ({ navigation, route }) => {
	const { data } = useFetchManifest("curiosity");
	// console.log(">> RoverInfoScreen >>: \n", data);
	const { rover } = route.params;
	const ib_source = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = screen => navigation.navigate(screen, { rover: rover });

	return (
		<SafeAreaView>
			<ImageBackground
				imageStyle={S.ib_imageStyle}
				resizeMode='cover'
				style={S.ib_style}
				source={ib_source}
			>
				<Text h1>{rover.toUpperCase()}</Text>

				<View>
					<Text>Status:</Text>
					<Text>Launch Date:</Text>
					<Text>Landing Date:</Text>
					<Text>Last Active SOL:</Text>
					<Text>Last Active Earth Date:</Text>
					<Text>Photo Count:</Text>
				</View>

				<View style={S.row_wrap_between}>
					{SEARCH_PARAMS.map(btn => (
						<Button
							buttonStyle={S.btnStyle}
							key={btn.title}
							onPress={() => handleOnPress(btn.screen)}
							title={btn.title}
						/>
					))}
				</View>

				<FAB
					color={COLORS.secondary}
					icon={{
						type: "font-awesome",
						name: "home",
						color: "white",
					}}
					onPress={() => navigation.navigate("Home")}
					size='large'
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RoverInfoScreen;

const S = StyleSheet.create({
	sav_style: {
		backgroundColor: "#000",
		flex: 1,
	},
	ib_imageStyle: {
		flex: 1,
		opacity: 0.5,
	},
	ib_style: {
		flex: 1,
		padding: SIZES[3],
	},
	btnStyle: {
		minWidth: "40%",
	},
	row_wrap_between: {
		alignContent: "center",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
});

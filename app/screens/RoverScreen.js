import { useContext, useEffect, useState } from "react";
import {
	Image,
	FlatList,
	ImageBackground,
	StyleSheet,
	View,
} from "react-native";
import { Button, Card, FAB, Text } from "react-native-elements";
import { COLORS, SIZES } from "../styles";
import { SEARCH_PARAMS, IMG_PATHS } from "../constants/rovers";

import List_Cameras from "../components/List_Cameras";
import NavButton from "../components/shared/Btn_Navigation";
import RoverContext from "../context/rover-context";
import RoverCard from "../components/RoverCard";
import SafeAreaView from "../components/shared/SafeAreaView";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverInfoScreen = ({ navigation, route }) => {
	// TODO:
	const { rover } = route.params;
	const imgSource = IMG_PATHS[rover.toLowerCase()];

	const handleOnPress = () =>
		navigation.navigate("LatestPhotos", { rover: rover });

	return (
		<SafeAreaView>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				style={S.bgStyle}
				source={imgSource}
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
				<View style={S.searchBtns}>
					{SEARCH_PARAMS.map(btn => (
						<Button
							buttonStyle={S.btnStyle}
							key={btn.title}
							onPress={() => handleOnPress()}
							title={btn.title}
						/>
					))}
				</View>
				<View>
					<FAB
						color={COLORS.primary}
						icon={{
							type: "font-awesome",
							name: "home",
							color: "white",
						}}
						onPress={() => navigation.navigate("Home")}
						size='large'
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RoverInfoScreen;

const S = StyleSheet.create({
	bgStyle: {
		flex: 1,
	},
	bgImgStyle: {
		flex: 1,
		opacity: 0.5,
	},
	btnStyle: {
		minWidth: "40%",
	},
	searchBtns: {
		alignContent: "space-around",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
});

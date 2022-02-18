import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import { IMG_PATHS, ROVER_NAMES } from "../constants";
import { useQuery } from "react-query";
import { getRoverManifest } from "../api";
import { COLORS, SIZES } from "../styles";

// CLEAN: create structured placeholderData to eliminate init screen flicker

const RoverCard = ({ navigation, rover }) => {
	const imgSource = IMG_PATHS[rover.toLowerCase()];
	const capName = rover.toUpperCase();

	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>Error: {error.message}</Text>;

	const handleOnPress = () =>
		navigation.navigate("Rover", {
			rover: rover,
			title: `${rover.toUpperCase()}`,
		});

	return (
		<Card containerStyle={S.cardContainer} wrapperStyle={S.cardWrapper}>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				style={S.bgStyle}
				source={imgSource}
			>
				<Pressable onPress={handleOnPress} style={S.pressable}>
					<Text>{rover}</Text>
				</Pressable>
			</ImageBackground>
		</Card>
	);
};

export default RoverCard;

const S = StyleSheet.create({
	cardContainer: {
		// backgroundColor: "#ff0",
		// padding: SIZES[2],
		height: "30%",
		minWidth: "40%",
	},
	cardWrapper: {
		// backgroundColor: "#0f0",
		flex: 1,
		// padding: SIZES[3],
	},
	bgStyle: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		width: "100%",
	},
	bgImgStyle: {
		flex: 1,
		opacity: 0.5,
	},
	btnSquare: {
		justifyContent: "space-evenly",
	},
	btnStyle: {
		borderColor: COLORS.textLT,
		borderWidth: SIZES[0],
		color: COLORS.textLT,
	},
	pressable: {
		flex: 1,
	},
	square: {
		flex: 1,
	},
	statsSquare: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	titleStyle: {
		color: COLORS.textLT,
	},
});

{
	/* <View style={[S.square, S.statsSquare]}>
					<Card.FeaturedTitle>{capName}</Card.FeaturedTitle>
					<Card.FeaturedSubtitle>
						{data.photo_manifest.status.toUpperCase()}
					</Card.FeaturedSubtitle>
					<Text>Launched: {data.photo_manifest.launch_date}</Text>
					<Text>Landed: {data.photo_manifest.landing_date}</Text>
					<Text>Last Img: {data.photo_manifest.max_date}</Text>
				</View>
				<View style={[S.square, S.btnSquare]}>
					<Button
						buttonStyle={S.btnStyle}
						title='latest photos'
						titleStyle={S.titleStyle}
						type='outline'
						onPress={() => handleOnPress(true)}
					/>
					<Button
						buttonStyle={S.btnStyle}
						title='search photos'
						titleStyle={S.titleStyle}
						type='outline'
						onPress={() => handleOnPress(false)}
					/>
				</View> */
}

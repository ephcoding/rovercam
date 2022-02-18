import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import { IMG_PATHS, ROVER_NAMES } from "../constants";
import { useQuery } from "react-query";
import { getRoverManifest } from "../api";
import { COLORS, SIZES } from "../styles";

// CLEAN: create structured placeholderData to eliminate init screen flicker

const RoverCard = ({ navigation, rover }) => {
	const { isLoading, error, data } = useQuery(
		["manifests", rover],
		() => getRoverManifest(rover),
		{
			placeholderData: () => {},
		}
	);

	const imgSource = IMG_PATHS[rover.toLowerCase()];
	const capName = rover.toUpperCase();

	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;

	const handleOnPress = isLatest => {
		if (isLatest) {
			navigation.navigate("DisplayLatestPhotos", {
				rover: rover,
				title: `LATEST ${capName} PHOTOS`,
			});
		} else {
			navigation.navigate("SearchPhotos", {
				img_url: IMG_PATHS[rover.toLowerCase()],
				photos: data.photo_manifest.photos,
				rover: rover,
				title: `SEARCH ${capName} PHOTOS`,
			});
		}
	};

	return (
		<Card>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				style={S.squares}
				source={imgSource}
			>
				<View style={[S.square, S.statsSquare]}>
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
						onPress={() => handleOnPress(false, { rover: rover })}
					/>
				</View>
			</ImageBackground>
		</Card>
	);
};

export default RoverCard;

const S = StyleSheet.create({
	btnSquare: {
		justifyContent: "space-evenly",
	},
	btnStyle: {
		borderColor: COLORS.textLT,
		borderWidth: SIZES[0],
		color: COLORS.textLT,
	},
	imgStyle: {
		opacity: 0.5,
	},
	square: {
		flex: 1,
	},
	squares: {
		flexDirection: "row",
		height: "100%",
		width: "100%",
	},
	statsSquare: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	titleStyle: {
		color: COLORS.textLT,
	},
});

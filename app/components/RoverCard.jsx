import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";
import { IMG_PATHS, ROVER_NAMES } from "../constants";
import { COLORS, SIZES } from "../theme";

// CLEAN: create structured placeholderData to eliminate init screen flicker

const RoverCard = ({ navigation, rover }) => {
	const ib_source = IMG_PATHS[rover.toLowerCase()];
	const capName = rover.toUpperCase();

	const handleOnPress = () =>
		navigation.navigate("Rover", {
			rover: rover,
			title: `${rover.toUpperCase()}`,
		});

	return (
		<Card
			containerStyle={S.card_containerStyle}
			wrapperStyle={S.card_wrapperStyle}
		>
			<ImageBackground
				imageStyle={S.ib_imageStyle}
				resizeMode='cover'
				style={S.ib_style}
				source={ib_source}
			>
				<Pressable onPress={handleOnPress} style={S.pr_style}>
					<Text style={S.txt_style}>{rover}</Text>
				</Pressable>
			</ImageBackground>
		</Card>
	);
};

export default RoverCard;

const S = StyleSheet.create({
	card_containerStyle: {
		height: "30%",
		minWidth: "40%",
	},
	card_wrapperStyle: {
		flex: 1,
	},
	ib_imageStyle: {
		opacity: 0.5,
	},
	ib_style: {
		height: "100%",
		width: "100%",
	},
	pr_style: {
		flex: 1,
		justifyContent: "flex-end",
	},
	txt_style: {
		fontWeight: "bold",
		marginBottom: SIZES[3],
		textAlign: "center",
		textTransform: "uppercase",
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

import { ImageBackground, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";

const RoverCard = ({ imgPath, xTitle }) => {
	const title = xTitle.toUpperCase();

	return (
		<Card>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				style={S.squares}
				source={imgPath}
			>
				<View style={[S.square, S.statsSquare]}>
					<Card.FeaturedTitle>{title}</Card.FeaturedTitle>
					<Card.FeaturedSubtitle>Rover Status</Card.FeaturedSubtitle>
					<Text>Left Earth:</Text>
					<Text>Landed:</Text>
					<Text>Photos:</Text>
				</View>
				<View style={[S.square, S.btnSquare]}>
					<Button title='latest photos' type='outline' />
					<Button title='search photos' type='outline' />
				</View>
			</ImageBackground>
		</Card>
	);
};

export default RoverCard;

const S = StyleSheet.create({
	squares: {
		flexDirection: "row",
		height: "100%",
		width: "100%",
	},
	square: {
		flex: 1,
	},
	statsSquare: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	btnSquare: {
		justifyContent: "space-evenly",
	},
	imgStyle: {
		opacity: 0.5,
	},
});

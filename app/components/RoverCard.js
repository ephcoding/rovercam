import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";

const RoverCard = () => {
	return (
		<Card>
			<View style={S.squares}>
				<View style={[S.square, S.statsSquare]}>
					<Card.Title>Title</Card.Title>
					<Card.FeaturedTitle>Featured Title</Card.FeaturedTitle>
					<Card.FeaturedSubtitle>Featured Sub-Title</Card.FeaturedSubtitle>
					<Text>Stat 1</Text>
					<Text>Stat 2</Text>
					<Text>Stat 3</Text>
				</View>
				<View style={[S.square, S.btnSquare]}>
					<Button title='latest photos' />
					<Button title='search photos' />
				</View>
			</View>
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
		backgroundColor: "#000",
	},
	btnSquare: {
		backgroundColor: "#555",
		justifyContent: "space-evenly",
	},
});

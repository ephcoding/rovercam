import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavButton from "../components/shared/Btn_Navigation";
import Img_Background from "../components/shared/Img_Background";
import SafeAreaView from "../components/shared/SafeAreaView";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";
import { useManifests } from "../hooks/use-manifests";
import { IMG_PATHS, ROVER_NAMES } from "../constants/rovers";
import { getManifests } from "../services/mars-photo-api/get-manifests";
import { useQuery } from "react-query";
// -- REACT NATIVE ELEMENTS
import { Card, Header, Text } from "react-native-elements";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover
 */

const HomeScreen = ({ navigation }) => {
	const { isLoading, error, data, isFetching } = useQuery(
		"tManifests",
		getManifests
	);
	if (isLoading) return <Text>Loading...</Text>;
	if (error) return <Text>{`Something broke: ${error}`}</Text>;

	// const [manifests, setManifests] = useState([]);
	// const res = useManifests();

	// useEffect(async () => {
	// 	const manifests = await getManifests();
	// 	setManifests([...manifests]);
	// }, []);

	// const roverCards = manifests
	// 	? manifests.map(manifest => {
	// 			const { name, launch_date, landing_date, max_sol, max_date } =
	// 				manifest.data.photo_manifest;
	// 			// const roverPath = IMG_PATHS[name.toLowerCase()];
	// 			// console.log(roverPath);
	// 			return (
	// 				<Card key={name}>
	// 					<Card.Title>{name}</Card.Title>
	// 					<Card.Image
	// 						source={{ uri: IMG_PATHS[name] }}
	// 						onPress={() => navigation.navigate("Rover", { rover: name })}
	// 					/>
	// 				</Card>
	// 			);
	// 	  })
	// 	: null;

	return (
		<SafeAreaView>
			<Img_Background
				opacity={0.9}
				imgSrc={require("../../assets/img/mars-glowing.jpg")}
			>
				<View_ContentWrapper>
					{/* <View style={S.roverCards}>{roverCards}</View> */}
					<Text>{JSON.stringify(data[0].data.photo_manifest.launch_date)}</Text>
					<Text>{isFetching ? "Fetching..." : ""}</Text>
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	roverCards: {
		backgroundColor: "#777",
		flex: 1,
		justifyContent: "space-evenly",
	},
});

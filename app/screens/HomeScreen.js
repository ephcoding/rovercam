import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import RoverCard from "../components/RoverCard";
import { IMG_PATHS } from "../constants/rovers";

/**
 * TODO: cleaner way to import imgs
 * TODO: how to rePOSITION bgImg
 * TODO: create outline logo for each rover for cool camera selection option
 */

const HomeScreen = ({ navigation }) => {
	const imgs = IMG_PATHS;

	return (
		<SafeAreaView style={S.screen}>
			<ImageBackground
				imageStyle={S.imgStyle}
				resizeMode='cover'
				source={require("../../assets/img/mars-glowing.jpg")}
				style={S.imgBg}
			>
				<RoverCard imgPath={imgs["curiosity"]} xTitle='Curiosity' />
				<RoverCard
					imgPath={require("../../assets/img/opportunity.jpg")}
					xTitle='Opportunity'
				/>
				<RoverCard
					imgPath={require("../../assets/img/perseverance.jpg")}
					xTitle='Perseverance'
				/>
				<RoverCard
					imgPath={require("../../assets/img/spirit.jpg")}
					xTitle='Spirit'
				/>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default HomeScreen;

const S = StyleSheet.create({
	imgBg: {
		flex: 1,
	},
	imgStyle: {
		opacity: 0.5,
	},
	screen: {
		backgroundColor: "#000",
		flex: 1,
		justifyContent: "space-evenly",
	},
});

// -- OLD CODE
// const { isLoading, error, data, isFetching } = useQuery(
// 	"tManifests",
// 	getManifests
// );
// if (isLoading) return <Text>Loading...</Text>;
// if (error) return <Text>{`Something broke: ${error}`}</Text>;

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

{
	/* <Text>{JSON.stringify(data[0].data.photo_manifest.launch_date)}</Text>
<Text>{isFetching ? "Fetching..." : ""}</Text> */
}
{
	/* <View_ContentWrapper> */
}
{
	/* <View style={S.roverCards}>{roverCards}</View> */
}
{
	/* </View_ContentWrapper> */
}

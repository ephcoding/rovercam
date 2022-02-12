import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import Axios from "../services/mars-photo-api/axios-config";
import Img_Background from "../components/shared/Img_Background";
import { NavigationEvents } from "react-navigation";

const DisplayPhotosScreen = ({ navigation, route }) => {
	console.log(">> NAVIGATION >>\n", navigation);
	console.log(">> ROUTE >>\n", route);
	// const willFocus = navigation.addListener("willFocus", payload => {
	// 	console.log("willFocus", payload.lastState.routeName);
	// });

	// const [photos, setPhotos] = useState();

	// const getCameraPhotos = async () => {
	// 	try {
	// 		const res = await Axios.get(`/rovers/${rover}/photos?camera=${cameraSH}`);
	// 		const photos = await res.data.photos;
	// 		console.clear();
	// 		console.log(res);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	getCameraPhotos();
	// });

	return (
		<SafeAreaView style={S.safeArea}>
			<Img_Background
				imgSrc={require("../../assets/img/mars-rover-tracks.jpg")}
			>
				<Text>Display Photos Screen</Text>
			</Img_Background>
		</SafeAreaView>
	);
};

export default DisplayPhotosScreen;

const S = StyleSheet.create({
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});

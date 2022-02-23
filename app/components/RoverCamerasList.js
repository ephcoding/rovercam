import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ROVER_CAMERAS } from "../constants/rovers";

const RoverCamerasList = ({ rover, setFilteredPhotos }) => {
	return (
		<ScrollView>
			{ROVER_CAMERAS[rover.toLowerCase()].map(camera => (
				<Button
					buttonStyle={S.buttonStyle}
					containerStyle={S.containerStyle}
					key={camera[1]}
					title={camera[0]}
					// navParams={{
					// 	name: camera[0],
					// 	abbr: camera[1],
					// 	roverName: rover,
					// }}
					onPress={() => setFilteredPhotos(camera[1])}
					screen='CameraPhotos'
				/>
			))}
		</ScrollView>
	);
};

export default RoverCamerasList;

const S = StyleSheet.create({
	buttonStyle: {
		marginVertical: 15,
	},
	containerStyle: {},
});

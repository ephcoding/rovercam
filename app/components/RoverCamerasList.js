import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ROVER_CAMERAS } from "../constants/rovers";

const RoverCamerasList = ({ cameras, setFilteredPhotos }) => {
	return (
		<ScrollView>
			{cameras.map(camera => {
				return (
					<Button
						buttonStyle={S.buttonStyle}
						containerStyle={S.containerStyle}
						key={camera.name}
						title={camera.full_name}
						onPress={() => setFilteredPhotos(camera.name)}
						screen='CameraPhotos'
					/>
				);
			})}
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

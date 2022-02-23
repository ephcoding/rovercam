import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ROVER_CAMERAS } from "../constants/rovers";

const RoverCamerasList = ({ rover, setFilteredPhotos }) => {
	return (
		<ScrollView>
			{ROVER_CAMERAS[rover.toLowerCase()].map(camera => {
				const fullCamName = camera[0];
				const cameraAbbr = camera[1];

				return (
					<Button
						buttonStyle={S.buttonStyle}
						containerStyle={S.containerStyle}
						key={cameraAbbr}
						title={fullCamName}
						onPress={() => setFilteredPhotos(cameraAbbr)}
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

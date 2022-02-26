import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { ROVER_CAMERAS } from "../constants/rovers";

const RoverCamerasList = ({
	cameraObjArr,
	setFilteredPhotos,
	removeCameraFilter,
}) => {
	const camOptions = cameraObjArr.map(camera => {
		return (
			<Button
				buttonStyle={S.buttonStyle}
				containerStyle={S.containerStyle}
				key={camera.name}
				title={camera.full_name}
				onPress={() => setFilteredPhotos(camera.name)}
				// screen='CameraPhotos'
			/>
		);
	});

	camOptions.unshift(
		<Button
			buttonStyle={S.buttonStyle}
			containerStyle={S.containerStyle}
			key={"show_all_photos"}
			title='ALL PHOTOS'
			onPress={() => removeCameraFilter()}
		/>
	);

	console.log(">> camOptions >>\n", camOptions);

	return <ScrollView>{camOptions}</ScrollView>;
};

export default RoverCamerasList;

const S = StyleSheet.create({
	buttonStyle: {
		marginVertical: 15,
	},
	containerStyle: {},
});

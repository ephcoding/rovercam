import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { CAMERAS } from "../constants/rovers";

const RoverCamerasList = ({ rover }) => {
	return (
		<>
			{CAMERAS[rover.toLowerCase()].map(camera => (
				<Button
					key={camera[1]}
					label={camera[0]}
					navParams={{ name: camera[0], abbr: camera[1], roverName: rover }}
					screen='CameraPhotos'
				/>
			))}
		</>
	);
};

export default RoverCamerasList;

const S = StyleSheet.create({});

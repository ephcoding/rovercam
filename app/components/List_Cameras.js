// >> CORE Components
import { StyleSheet, Text, View } from "react-native";
// >> MDX Components
import Btn_Navigation from "./mdx-core/Btn_Navigation";
import List_NavigationBtns from "../components/mdx-core/List_NavigationBtns";
// >> Utils
import { CAMERAS } from "../site-data";

const List_Cameras = ({ rover }) => {
	return (
		<>
			{CAMERAS[rover].map(camera => (
				<Btn_Navigation
					key={camera[1]}
					label={camera[0]}
					screen='CameraPhotos'
				/>
			))}
		</>
	);
};

export default List_Cameras;

const S = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { CAMERAS } from "../constants";
import RoverContext from "../context/rover-context";
import Btn_Navigation from "./mdx-core/Btn_Navigation";
import List_NavigationBtns from "../components/mdx-core/List_NavigationBtns";

const List_Cameras = ({ rover }) => {
	let navParams = null;

	return (
		<>
			{CAMERAS[rover.toLowerCase()].map(camera => (
				<Btn_Navigation
					key={camera[1]}
					label={camera[1]}
					navParams={navParams}
					screen='CameraPhotos'
				/>
			))}
		</>
	);
};

export default List_Cameras;

const S = StyleSheet.create({});

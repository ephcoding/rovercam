import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { CAMERAS } from "../constants/rovers";
import RoverContext from "../context/rover-context";
import NavButton from "./shared/Btn_Navigation";
import List_NavigationBtns from "./shared/List_NavigationBtns";

const List_Cameras = ({ rover }) => {
	return (
		<>
			{CAMERAS[rover.toLowerCase()].map(camera => (
				<NavButton
					key={camera[1]}
					label={camera[0]}
					navParams={{ name: camera[0], abbr: camera[1], roverName: rover }}
					screen='CameraPhotos'
				/>
			))}
		</>
	);
};

export default List_Cameras;

const S = StyleSheet.create({});

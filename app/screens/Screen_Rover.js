import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import { CAMERAS, QUERIES, IMG_PATHS } from "../constants";
import { useFetchRoverManifest } from "../hooks/use-manifest";
import Img_Background from "../components/shared/Img_Background";
import List_Cameras from "../components/List_Cameras";
import NavButton from "../components/shared/Btn_Navigation";
import RoverContext from "../context/rover-context";
import RoverInfo from "../components/RoverInfo";
import SafeAreaView from "../components/shared/SafeAreaView";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverScreen = ({ navigation }) => {
	const rover = navigation.getParam("rover");
	const roverLC = rover.toLowerCase();
	console.log(rover);
	const { manifest } = useFetchRoverManifest(rover);

	if (!manifest) return;

	return (
		<SafeAreaView>
			<Img_Background imgSrc={IMG_PATHS[roverLC]} opacity={0.5}>
				<View_ContentWrapper>
					<RoverInfo manifest={manifest} />
					{/* <FlatList
						data={Object.values(CAMERAS[roverLC])}
						keyExtractor={camera => camera[0]}
						renderItem={({ item: camera }) => (
							<NavButton
								label={camera[0]}
								navParams={{ abbr: camera[1], name: camera[0], rover }}
								screen='Photos'
							/>
						)}
						style={S.flatList}
					/> */}
					<FlatList
						data={QUERIES}
						keyExtractor={queryType => queryType}
						renderItem={({ item: queryType }) => (
							<NavButton
								label={queryType}
								navParams={{ rover, type: queryType }}
								screen={`${queryType.split(" ").join("")}`}
							/>
						)}
						style={S.flatList}
					/>
				</View_ContentWrapper>
			</Img_Background>
		</SafeAreaView>
	);
};

export default RoverScreen;

const S = StyleSheet.create({
	flatList: {
		flex: 1,
	},
});

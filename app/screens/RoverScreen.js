import { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles";
import { CAMERAS, API_QUERY_PARAMS, IMG_PATHS } from "../constants/rovers";

import Img_Background from "../components/shared/Img_Background";
import List_Cameras from "../components/List_Cameras";
import NavButton from "../components/shared/Btn_Navigation";
import RoverContext from "../context/rover-context";
import RoverCard from "../components/RoverCard";
import SafeAreaView from "../components/shared/SafeAreaView";
import Text_Title from "../components/shared/Text_Title";
import View_ContentWrapper from "../components/shared/View_ContentWrapper";

const RoverInfoScreen = ({ navigation, route }) => {
	// TODO:
	const { rover } = route.params;
	const roverLC = rover.toLowerCase();

	return (
		<SafeAreaView>
			<Img_Background imgSrc={IMG_PATHS[roverLC]} opacity={0.5}>
				<View_ContentWrapper>
					{/* <RoverCard manifest={manifest} /> */}
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
						data={API_QUERY_PARAMS}
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

export default RoverInfoScreen;

const S = StyleSheet.create({
	flatList: {
		flex: 1,
	},
});

import { StyleSheet, Text, View } from "react-native";

const List_Cameras = ({ cameras, styleMods }) => {
	return (
		<View style={S.cameras}>
			{CAMERAS.Curiosity.map(camera => (
				<View key={camera[1]} style={S.camera}>
					<Text style={{ color: "#fff" }}>{camera[0]}</Text>
				</View>
			))}
		</View>
	);
};

export default List_Cameras;

const styles = StyleSheet.create({});

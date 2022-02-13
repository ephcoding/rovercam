import { FlatList, StyleSheet, Text, View } from "react-native";
import { QueryCache } from "react-query";

const PhotosList = photos => {
	console.log(">> photos >>\n", photos);

	return (
		<FlatList
			data={photos}
			keyExtractor={photo => photo.id}
			PlaceholderContext={<Text>FlatList Loading...</Text>}
			style={S.flatListStyle}
			renderItem={({ item, index }) => (
				<Image
					resizeMode='cover'
					source={{ uri: item.img_src }}
					style={S.listImgStyle}
				/>
			)}
		/>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatListStyle: {
		flex: 1,
	},
	listImgStyle: {
		aspectRatio: 1,
		width: "100%",
		flex: 1,
	},
});

import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { QueryCache } from "react-query";

const PhotosList = ({ photos }) => {
	return (
		<FlatList
			data={photos}
			keyExtractor={photo => photo.id}
			numColumns={2}
			PlaceholderContext={<Text>FlatList Loading...</Text>}
			renderItem={({ item, index }) => {
				// console.log(">> item.img_src >>\n", item.img_src);

				return (
					<Image
						resizeMode='cover'
						source={{ uri: item.img_src }}
						style={S.imgStyle}
					/>
				);
			}}
			style={S.flatListStyle}
		/>
	);
};

export default PhotosList;

const S = StyleSheet.create({
	flatListStyle: {
		flex: 1,
	},
	imgStyle: {
		aspectRatio: 1,
		borderRadius: 50,
		flex: 1,
		margin: 10,
	},
});

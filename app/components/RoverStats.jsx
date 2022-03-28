import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { COLORS, SIZES } from "../theme";
import { useFetchManifest } from "../hooks";
import { IMG_PATHS } from "../constants";

const RoverStats = ({ data }) => {
	return (
		<View style={S.statsListView_style}>
			<View style={S.statView_style}>
				<Text h3 style={{ color: COLORS.primary }}>
					Mission Status:
				</Text>
				<Text
					h3
					style={{
						color: data.photo_manifest.status === "active" ? "#0f0" : "#888",
					}}
				>
					{data && data.photo_manifest.status}
				</Text>
			</View>
			<View style={S.statView_style}>
				<Text h3 style={{ color: COLORS.primary }}>
					Left Earth:
				</Text>
				<Text style={{ fontSize: SIZES[5] }}>
					{data && data.photo_manifest.launch_date}
				</Text>
			</View>
			<View style={S.statView_style}>
				<Text h3 style={{ color: COLORS.primary }}>
					Landed On Mars:
				</Text>
				<Text style={{ fontSize: SIZES[5] }}>
					{data && data.photo_manifest.landing_date}
				</Text>
			</View>
			<View style={S.statView_style}>
				<Text h3 style={{ color: COLORS.primary }}>
					Last Photo:
				</Text>
				<Text style={{ fontSize: SIZES[5] }}>
					{data && data.photo_manifest.max_date}
				</Text>
			</View>
			<View style={S.statView_style}>
				<Text h3 style={{ color: COLORS.primary }}>
					Photos:
				</Text>
				<Text style={{ fontSize: SIZES[5] }}>
					{data && data.photo_manifest.total_photos}
				</Text>
			</View>
		</View>
	);
};

export default RoverStats;

const S = StyleSheet.create({
	statsListView_style: {
		flex: 1,
	},
	statView_style: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

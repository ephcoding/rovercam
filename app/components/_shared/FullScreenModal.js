import { Modal, StyleSheet, Text, View } from "react-native";

const FullScreenModal = ({ children, isVisible }) => {
	return (
		<Modal transparent={true} visible={isVisible}>
			<View style={S.view_style}>{children}</View>
		</Modal>
	);
};

export default FullScreenModal;

const S = StyleSheet.create({
	view_style: {
		alignItems: "center",
		backgroundColor: "#000a",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
});

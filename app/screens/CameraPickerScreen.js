import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CameraPickerScreen = () => {
	return (
		<SafeAreaView style={S.safeArea}>
			<ImageBackground
				imageStyle={S.imgBgImgStyle}
				resizeMode='cover'
				source={route.params.img_url}
				style={S.imgBgStyle}
			>
				<View style={S.camerasView}>
					{ROVERS[rover.toLowerCase()].map(cameraArr => (
						<Button
							buttonStyle={S.btnStyle}
							containerStyle={S.containerStyle}
							key={cameraArr[1]}
							title={cameraArr[0]}
							titleStyle={S.btnTitleStyle}
						/>
					))}
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default CameraPickerScreen;

const styles = StyleSheet.create({});

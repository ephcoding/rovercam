import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { useFetchManifest } from "../hooks";
import DatePicker from "../components/DatePicker";
import { IMG_PATHS } from "../constants";
import { QueryClient } from "react-query";
import { COLORS } from "../styles";
import { SafeAreaView } from "../components/shared";

const DatePickerScreen = ({ navigation, route }) => {
	const queryClient = new QueryClient();

	console.log(">> DatePickerScreen >>\n", queryClient.getQueryData("manifest"));

	const imgSource = IMG_PATHS[route.params.rover.toLowerCase()];
	const { rover } = route.params;

	// const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	// const rover = route.params.rover;
	// const { isLoading, error, data } = useFetchManifest(rover);

	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>ERROR >> {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground
				imageStyle={S.bgImgStyle}
				resizeMode='cover'
				source={imgSource}
				style={S.bgStyle}
			>
				<View style={S.pickerView}>
					<DatePicker
						earthDatesArr={["2012-08-12", "2012-10-12"]}
						// earthDatesArr={earthDatesArr}
						navigation={navigation}
						rover={rover}
					/>
				</View>
				<View>
					<FAB
						color={COLORS.secondary}
						icon={{
							type: "font-awesome",
							name: "home",
							color: "white",
						}}
						onPress={() => navigation.navigate("Home")}
						size='large'
					/>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DatePickerScreen;

const S = StyleSheet.create({
	bgImgStyle: {
		flex: 1,
		opacity: 0.3,
	},
	bgStyle: {
		flex: 1,
	},
	pickerView: {
		flex: 1,
	},
	safeArea: {
		backgroundColor: COLORS.backgroundDK,
		flex: 1,
	},
});

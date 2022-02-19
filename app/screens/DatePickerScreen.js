import { StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { useFetchManifest } from "../hooks";
import DatePicker from "../components/DatePicker";
import { IMG_PATHS } from "../constants";
import { QueryClient } from "react-query";
import { COLORS } from "../styles";
import { ImageBackground, SafeAreaView } from "../components/shared";

const DatePickerScreen = ({ navigation, route }) => {
	const queryClient = new QueryClient();

	console.log(">> DatePickerScreen >>\n", queryClient.getQueryData("manifest"));

	const img_source = IMG_PATHS[route.params.rover.toLowerCase()];
	const { rover } = route.params;

	// const earthDatesArr = route.params.photos.map(photo => photo.earth_date);
	// const rover = route.params.rover;
	// const { isLoading, error, data } = useFetchManifest(rover);

	// if (isLoading) return <Text>Loading...</Text>;
	// if (error) return <Text>ERROR >> {error.message}</Text>;

	return (
		<SafeAreaView>
			<ImageBackground source={img_source}>
				<View style={S.pickerView}>
					<DatePicker
						earthDatesArr={["2012-08-12", "2012-10-12"]}
						// earthDatesArr={earthDatesArr}
						navigation={navigation}
						rover={rover}
					/>
				</View>

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
			</ImageBackground>
		</SafeAreaView>
	);
};

export default DatePickerScreen;

const S = StyleSheet.create({
	pickerView: {
		flex: 1,
	},
});

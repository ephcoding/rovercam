import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStackNavigator from "./app/navigation/app-stack-navigator";

export default App = () => {
	return (
		<SafeAreaProvider>
			<AppStackNavigator />
		</SafeAreaProvider>
	);
};

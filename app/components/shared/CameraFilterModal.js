import { StyleSheet, Text, View } from "react-native";
import FullScreenModal from "./FullScreenModal";
import RoverCamerasList from "../RoverCamerasList";

const CameraFilterModal = ({ cameras, isVisible, removeFilter, setFilter }) => {
	return (
		<FullScreenModal isVisible={isVisible}>
			<RoverCamerasList
				cameraObjArr={cameras}
				setFilteredPhotos={setFilter}
				removeCameraFilter={removeFilter}
			/>
		</FullScreenModal>
	);
};

export default CameraFilterModal;

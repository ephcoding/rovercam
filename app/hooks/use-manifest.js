import { useEffect, useState } from "react";
import Axios from "../services/marsRoverApi/axios-config";

export const useFetchManifest = roverName => {
	const [manifest, setManifest] = useState({});

	useEffect(() => {
		const getRoverManifest = async () => {
			try {
				const res = await Axios.get(`/manifests/${roverName}`);
				const photoManifest = await res.data.photo_manifest;
				setManifest(photoManifest);
			} catch (error) {
				console.log(error);
			}
		};

		getRoverManifest();
	}, [roverName]);

	return { manifest };
};

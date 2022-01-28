import { useEffect, useState } from "react";
import ROVER_API from "../api/mars_rover";
import { TEST_MANIFEST_INFO } from "../app_data";

export default () => {
	const [manifests, setManifests] = useState([]);
	const [errorMsg, setErrorMsg] = useState(null);

	// console.log(">> userRoverManifests() >>");

	useEffect(() => {
		// console.log(">> USE EFFECT >>");
		getRoverManifests();
	}, []);

	const getRoverManifests = async () => {
		let roverManifests = [];

		try {
			const manifestsResponse = await Promise.all([
				ROVER_API.get("/manifests/curiosity"),
				ROVER_API.get("/manifests/opportunity"),
				ROVER_API.get("/manifests/perseverance"),
				ROVER_API.get("/manifests/spirit"),
			]);
			// const res = await ROVER_API.get("/manifests/curiosity");
			// console.log(res);
			for (const manifest of manifestsResponse) {
				const {
					name,
					landing_date,
					launch_date,
					status,
					max_sol,
					max_date,
					total_photos,
					photos,
				} = manifest.data.photo_manifest;
				// console.log(Object.keys(manifest.data.photo_manifest));
				roverManifests.push({
					name,
					landing_date,
					launch_date,
					max_date,
					total_photos,
				});

				setManifests(roverManifests);
			}
		} catch (error) {
			console.log(error);
			setErrorMsg(error);
		}
	};

	return [manifests, errorMsg];
};

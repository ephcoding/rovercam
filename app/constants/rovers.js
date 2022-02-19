import tracksUri from "../../assets/img/mars-rover-tracks.jpg";
import earthUri from "../../assets/img/i-seee-you.jpg";
import marsUri from "../../assets/img/mars-side-swipe.jpg";
import perseveranceUri from "../../assets/img/perseverance.jpg";

export const ROVER_CAMERAS = {
	curiosity: [
		["Front Hazard Avoidance Camera", "FHAZ"],
		["Rear Hazard Avoidance Camera", "RHAZ"],
		["Mast Camera", "MAST"],
		["Chemistry & Camera Complex", "CHEMCAM"],
		["Mars Hand Lens Imager", "MAHLI"],
		["Mars Decent Imager", "MARDI"],
		["Navigation Camera", "NAVCAM"],
	],
	opportunity: [
		["Front Hazard Avoidance Camera", "FHAZ"],
		["Rear Hazard Avoidance Camera", "RHAZ"],
		["Navigation Camera", "NAVCAM"],
		["Panoramic Camera", "PANCAM"],
		["Miniature Thermal Emission Spectrometer", "MINITES"],
	],
	perseverance: [
		["Rover Up-Look Camera", "EDL_RUCAM"],
		["Rover Down-Look Camera", "EDL_RDCAM"],
		["Decent Stage Down-Look Camera", "EDL_DDCAM"],
		["Parachute Up-Look Camera A", "EDL_PUCAM1"],
		["Parachute Up-Look Camera B", "EDL_PUCAM2"],
		["Navigation Camera - Left", "NAVCAM_LEFT"],
		["Navigation Camera - Right", "NAVCAM_RIGHT"],
		["Mast Camera Zoom - Right", "MCZ_RIGHT"],
		["Mast Camera Zoom - Left", "MCZ_LEFT"],
		["Front Hazard Avoidance Camera - Left", "FRONT_HAZCAM_LEFT_A"],
		["Front Hazard Avoidance Camera - Right", "FRONT_HAZCAM_RIGHT_A"],
		["Rear Hazard Avoidance Camera - Left", "REAR_HAZCAM_LEFT"],
		["Rear Hazard Avoidance Camera - Right", "REAR_HAZCAM_RIGHT"],
		["MEDA Skycam", "SKYCAM"],
		["SHERLOC WATSON Camera", "SHERLOC_WATSON"],
	],
	spirit: [
		["Front Hazard Avoidance Camera", "FHAZ"],
		["Rear Hazard Avoidance Camera", "RHAZ"],
		["Navigation Camera", "NAVCAM"],
		["Panoramic Camera", "PANCAM"],
		["Miniature Thermal Emission Spectrometer", "MINITES"],
	],
};

export const IMG_PATHS = {
	curiosity: require("../../assets/img/curiosity.jpg"),
	opportunity: require("../../assets/img/opportunity.jpg"),
	perseverance: require("../../assets/img/perseverance.jpg"),
	spirit: require("../../assets/img/spirit.jpg"),
};

export const ROVER_NAMES = {
	curiosity: "Curiosity",
	opportunity: "Opportunity",
	perseverance: "Perseverance",
	spirit: "Spirit",
};

/**
 * [screen] prop matches screen name in StackNavigator (App.js)
 * [title] prop is used for button labels
 */

export const SEARCH_PARAMS = [
	{
		description: "Check out the latest photos from each Rover.",
		title: "LATEST",
		screen: "LatestPhotos",
	},
	{
		description: "Search photos by date.",
		title: "EARTH DATE",
		screen: "DatePicker",
	},
	{
		description: "A 'SOL' (sAHL) is 1 Martian day.",
		title: "MARTIAN SOL",
		screen: "SOLPicker",
	},
	{
		description: "Rovers have multiple cameras to filter photos by.",
		title: "CAMERAS",
		screen: "CameraPicker",
	},
];

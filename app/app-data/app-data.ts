const API_LIST = [
	{
		label: "APOD",
		description: "Astronomy Picture of the Day",
	},
	{
		label: "Asteroids NeoWs",
		description: "Near Earth Web Service",
	},
	{
		label: "DONKI",
		description:
			"Space Weather Database Of Notifications, Knowledge, Information",
	},
	{
		label: "Earth",
		description:
			"Unlock the significant public investment in earth observation data",
	},
	{
		label: "EONET",
		description: "The Earth Observatory Natural Event Tracker",
	},
	{
		label: "EPIC",
		description: "Earth Polychromatic Imaging Camera",
	},
	{
		label: "Exoplanet",
		description: "Programmatic access to NASA's Exoplanet Archive database",
	},
	{
		label: "GeneLab",
		description:
			"Programmatic interface for GeneLab's public data repository website",
	},
	{
		label: "Insight",
		description: "Mars Weather Service API",
	},
	{
		label: "Mars Rover Photos",
		description:
			"Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars",
	},
	{
		label: "NASA Image and Video Library",
		description:
			"API to access the NASA Image and Video Library site at images.nasa.gov",
	},
	{
		label: "TechTransfer",
		description: "Patents, Software, and Tech Transfer Reports",
	},
	{
		label: "Satellite Situation Center",
		description:
			"System to cast geocentric spacecraft location information into a framework of (empirical) geophysical regions",
	},
	{
		label: "SSD/CNEOS",
		description: "Solar System Dynamics and Center for Near-Earth Studies",
	},
	{
		label: "Techport",
		description:
			"API to make NASA technology project data available in a machine-readable format",
	},
	{
		label: "TLE API",
		description:
			"Two line element data for earth-orbiting objects at a given point in time",
	},
	{
		label: "Vesta/Moon/Mars Trek WMTS",
		description:
			"A Web Map Tile Service for the Vesta, Moon, and Mars Trek imagery projects",
	},
];
export const ROVER_LIST = [
	{
		name: "Curiosity",
		cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"],
	},
	{
		name: "Opportunity",
		cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
	},
	{
		name: "Perseverance",
		cameras: [
			"EDL_RUCAM",
			"EDL_RDCAM",
			"EDL_DDCAM",
			"EDL_PUCAM1",
			"EDL_PUCAM2",
			"NAVCAM_LEFT",
			"NAVCAM_RIGHT",
			"MCZ_RIGHT",
			"MCZ_LEFT",
			"FRONT_HAZCAM_LEFT_A",
			"FRONT_HAZCAM_RIGHT_A",
			"REAR_HAZCAM_LEFT",
			"REAR_HAZCAM_RIGHT",
			"SKYCAM",
			"SHERLOC_WATSON",
		],
	},
	{
		name: "Spirit",
		cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"],
	},
];
export const ROVER_SECTION_OPTIONS = [
	"Rover Info",
	"Missions",
	"Latest Images",
	"Search Images",
];
export const TEST_MANIFEST_INFO = [
	{
		landing_date: "2012-08-06",
		launch_date: "2011-11-26",
		max_date: "2021-12-24",
		name: "Curiosity",
		total_photos: 535418,
	},
	{
		landing_date: "2004-01-25",
		launch_date: "2003-07-07",
		max_date: "2018-06-11",
		name: "Opportunity",
		total_photos: 198439,
	},
	{
		landing_date: "2021-02-18",
		launch_date: "2020-07-30",
		max_date: "2021-12-25",
		name: "Perseverance",
		total_photos: 44827,
	},
	{
		landing_date: "2004-01-04",
		launch_date: "2003-06-10",
		max_date: "2010-03-21",
		name: "Spirit",
		total_photos: 124550,
	},
];

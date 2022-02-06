import Text_Body from "./mdx-core/Text_Body";

const RoverStats = ({ roverInfo }) => {
	const { name, launch_date, landing_date, max_date, total_photos } = roverInfo;

	return (
		<>
			<Text_Body>Launched: {launch_date}</Text_Body>
			<Text_Body>Landed: {landing_date}</Text_Body>
			<Text_Body>Last Transmission: {max_date}</Text_Body>
			<Text_Body>Pic Count: {total_photos}</Text_Body>
		</>
	);
};

export default RoverStats;

import Text_Body from "./shared/Text_Body";
import Text_Title from "./shared/Text_Title";

const RoverCard = ({ manifest }) => {
	const {
		name,
		launch_date,
		landing_date,
		max_date,
		max_sol,
		status,
		total_photos,
	} = manifest;

	if (!manifest) return;

	return (
		<>
			<Text_Title>{name}</Text_Title>
			<Text_Body>Launched: {launch_date}</Text_Body>
			<Text_Body>Landed: {landing_date}</Text_Body>
			<Text_Body>Max Date: {max_date}</Text_Body>
			<Text_Body>Max SOL: {max_sol}</Text_Body>
			<Text_Body>Photo Total: {total_photos}</Text_Body>
			<Text_Body>Mission Status: {status}</Text_Body>
		</>
	);
};

export default RoverCard;

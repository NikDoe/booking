import { useParams } from "react-router-dom";

const Flight = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>страница самолёта {id}</h1>
		</div>
	);
};

export default Flight;

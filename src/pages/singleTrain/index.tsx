import { useParams } from "react-router-dom";

const Train = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>страница поезда {id}</h1>
		</div>
	);
};

export default Train;

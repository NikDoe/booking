import { useParams } from "react-router-dom";

const Hotel = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>страница отеля {id}</h1>
		</div>
	);
};

export default Hotel;

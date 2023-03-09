import { Link } from "react-router-dom";
import TrainsList from "../../components/TrainsList";
import { useTitle } from "../../hooks";

const Trains = () => {
	useTitle("забронировать билеты на поезд онлайн");
	return (
		<main>
			<TrainsList />
			<Link to="/">на главную</Link>
		</main>
	);
};

export default Trains;

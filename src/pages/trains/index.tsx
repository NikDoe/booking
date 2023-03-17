import { Link } from "react-router-dom";
import { TrainsList } from "components";
import { useTitle } from "hooks";

const Trains = () => {
	useTitle("забронировать билеты на поезд онлайн");
	return (
		<div>
			<h1>страница поездов</h1>
			<TrainsList />
			<Link to="/">на главную</Link>
		</div>
	);
};

export default Trains;

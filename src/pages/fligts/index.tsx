import { Link } from "react-router-dom";
import { FlightsList } from "../../components";
import { useTitle } from "../../hooks";

const Flights = () => {
	useTitle("забронировать билеты на самолёт онлайн");
	return (
		<div>
			<h1>страница самолётов</h1>
			<FlightsList />
			<Link to="/">на главную</Link>
		</div>
	);
};

export default Flights;

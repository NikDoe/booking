import TrainsList from "../../components/TrainsList";
import { useTitle } from "../../hooks";

const Trains = () => {
	useTitle("забронировать билеты на поезд онлайн");
	return (
		<main>
			<TrainsList />
		</main>
	);
};

export default Trains;

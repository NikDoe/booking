import { Link } from "react-router-dom";
import { useTitle } from "../../hooks";

const Hotels = () => {
	useTitle("забронировать билеты в отель онлайн");
	return (
		<main>
			<h1>страница отелей</h1>
			<Link to="/">на главную</Link>
		</main>
	);
};

export default Hotels;

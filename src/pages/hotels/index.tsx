import { Link } from "react-router-dom";
import { useTitle } from "../../hooks";

const Hotels = () => {
	useTitle("забронировать билеты в отель онлайн");
	return (
		<div>
			<h1>страница отелей</h1>
			<Link to="/">на главную</Link>
		</div>
	);
};

export default Hotels;

import { FC } from "react";
import { useTitle } from "../../hooks";

import "webli-ui/dist/style.css";

const Public: FC = () => {
	useTitle("Бронирование билетов | номеров онлайн");
	return <div>Home page</div>;
};

export default Public;

import { FC } from "react";
import { Link } from "react-router-dom";
import { IFlightsApi } from "api";
import { SingleWrapper } from "components/common";

const FlightCard: FC<IFlightsApi> = ({ id }) => {
	return (
		<SingleWrapper>
			<Link to={`${id}`}>карточка самолёта {id}</Link>
		</SingleWrapper>
	);
};

export default FlightCard;

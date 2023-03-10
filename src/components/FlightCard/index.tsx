import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const FlightCard: FC<ISingleProps> = ({ id, to }) => {
	return (
		<SingleWrapper>
			<Link to={to}>карточка самолёта {id}</Link>
		</SingleWrapper>
	);
};

export default FlightCard;

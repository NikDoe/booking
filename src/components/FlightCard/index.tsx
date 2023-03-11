import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const FlightCard: FC<ISingleProps> = ({ id }) => {
	return (
		<SingleWrapper>
			<Link to={`${id}`}>карточка самолёта {id}</Link>
		</SingleWrapper>
	);
};

export default FlightCard;

import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const TrainCard: FC<ISingleProps> = ({ id, to }) => {
	return (
		<SingleWrapper>
			<Link to={to}>карточка поезда {id}</Link>
		</SingleWrapper>
	);
};

export default TrainCard;

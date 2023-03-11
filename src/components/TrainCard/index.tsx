import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const TrainCard: FC<ISingleProps> = ({ id }) => {
	return (
		<SingleWrapper>
			<Link to={`${id}`}>карточка поезда {id}</Link>
		</SingleWrapper>
	);
};

export default TrainCard;

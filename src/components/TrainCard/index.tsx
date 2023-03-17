import { FC } from "react";
import { Link } from "react-router-dom";
import { ItrainsApi } from "api";
import { SingleWrapper } from "components/common";

const TrainCard: FC<ItrainsApi> = ({ id }) => {
	return (
		<SingleWrapper>
			<Link to={`${id}`}>карточка поезда {id}</Link>
		</SingleWrapper>
	);
};

export default TrainCard;

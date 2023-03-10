import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const HotelCard: FC<ISingleProps> = ({ id, to }) => {
	return (
		<SingleWrapper>
			<Link to={to}>карточка отеля {id}</Link>
		</SingleWrapper>
	);
};

export default HotelCard;

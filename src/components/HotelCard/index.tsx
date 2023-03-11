import { FC } from "react";
import { Link } from "react-router-dom";
import { IHotelsApi } from "../../api";
import { SingleWrapper } from "../common";

const HotelCard: FC<IHotelsApi> = ({ id }) => {
	return (
		<SingleWrapper>
			<Link to={`${id}`}>карточка отеля {id}</Link>
		</SingleWrapper>
	);
};

export default HotelCard;

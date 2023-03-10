import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const SingleTrain: FC<ISingleProps> = ({ id, to }) => {
	return (
		<SingleWrapper>
			<Link to={to}>train {id}</Link>
		</SingleWrapper>
	);
};

export default SingleTrain;

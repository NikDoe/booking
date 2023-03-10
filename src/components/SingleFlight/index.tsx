import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";
import { SingleWrapper } from "../common";

const SingleFlight: FC<ISingleProps> = ({ id, to }) => {
	return (
		<SingleWrapper>
			<Link to={to}>flight {id}</Link>
		</SingleWrapper>
	);
};

export default SingleFlight;

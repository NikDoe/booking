import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";

const SingleFlight: FC<ISingleProps> = ({ id, to }) => {
	return <Link to={to}>flight {id}</Link>;
};

export default SingleFlight;

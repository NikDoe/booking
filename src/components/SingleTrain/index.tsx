import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";

const SingleTrain: FC<ISingleProps> = ({ id, to }) => {
	return <Link to={to}>train {id}</Link>;
};

export default SingleTrain;

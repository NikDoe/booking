import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";

import styles from "./style.module.css";

const SingleTrain: FC<ISingleProps> = ({ id, to }) => {
	return (
		<Link className={styles.Main} to={to}>
			train {id}
		</Link>
	);
};

export default SingleTrain;

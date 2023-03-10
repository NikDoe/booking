import { FC } from "react";
import { Link } from "react-router-dom";
import { ISingleProps } from "../../types";

import styles from "./style.module.css";

const SingleFlight: FC<ISingleProps> = ({ id, to }) => {
	return (
		<Link className={styles.Main} to={to}>
			flight {id}
		</Link>
	);
};

export default SingleFlight;

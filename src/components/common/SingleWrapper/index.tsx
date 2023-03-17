import { FC } from "react";
import { IWrapperProps } from "types";

import styles from "./style.module.css";

const SingleWrapper: FC<IWrapperProps> = ({ children, ...props }) => {
	return (
		<li className={styles.Wrapper} {...props}>
			{children}
		</li>
	);
};

export default SingleWrapper;

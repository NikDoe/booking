import { FC, ReactNode } from "react";

import styles from "./styles.module.css";

interface IListWrapperProps {
	children: ReactNode;
}

const ListWrapper: FC<IListWrapperProps> = ({ children, ...props }) => {
	return (
		<ul className={styles.Wrapper} {...props}>
			{children}
		</ul>
	);
};

export default ListWrapper;

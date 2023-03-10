import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

import styles from "./style.module.css";

interface ICustomNavLinkProps {
	children: ReactNode;
	to: string;
}

const CustomNavLink: FC<ICustomNavLinkProps> = ({ children, to, ...props }) => {
	const match = useMatch(to);

	return (
		<Link
			to={to}
			className={clsx(styles.Main, match && styles.Active)}
			{...props}
		>
			{children}
		</Link>
	);
};

export default CustomNavLink;

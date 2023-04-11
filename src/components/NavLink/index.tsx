import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

import styles from "./style.module.css";

interface ICustomNavLinkProps {
	children: ReactNode;
	to: string;
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const CustomNavLink: FC<ICustomNavLinkProps> = ({
	children,
	to,
	onClick,
	...props
}) => {
	const match = useMatch(to);

	return (
		<Link
			to={to}
			className={clsx(styles.Main, match && styles.Active)}
			onClick={onClick}
			{...props}
		>
			{children}
		</Link>
	);
};

export default CustomNavLink;

import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

import styles from "./styles.module.css";

interface ICustomNavLinkProps {
	children: ReactNode;
	to: string;
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
	className: string;
}

const CustomNavLink: FC<ICustomNavLinkProps> = ({
	className,
	children,
	to,
	onClick,
	...props
}) => {
	const match = useMatch(to);

	return (
		<Link
			to={to}
			className={clsx(styles.Main, match && styles.Active, className)}
			onClick={onClick}
			{...props}
		>
			{children}
		</Link>
	);
};

export default CustomNavLink;

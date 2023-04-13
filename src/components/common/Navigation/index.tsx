import { CustomNavLink, ProfileMenu } from "components";

import styles from "./styles.module.css";

const Nav = () => {
	return (
		<nav className={styles.Main}>
			<CustomNavLink to="trains">trains</CustomNavLink>
			<CustomNavLink to="flights">flights</CustomNavLink>
			<CustomNavLink to="hotels">hotels</CustomNavLink>
			<ProfileMenu />
		</nav>
	);
};

export default Nav;

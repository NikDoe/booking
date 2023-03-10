import CustomNavLink from "../../NavLink";

const Nav = () => {
	return (
		<nav>
			<CustomNavLink to="trains">trains</CustomNavLink>
			<CustomNavLink to="flights">flights</CustomNavLink>
			<CustomNavLink to="hotels">hotels</CustomNavLink>
		</nav>
	);
};

export default Nav;

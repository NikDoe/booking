import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to="trains">trains</NavLink>
			<NavLink to="flights">flights</NavLink>
			<NavLink to="hotels">hotels</NavLink>
		</nav>
	);
};

export default Nav;

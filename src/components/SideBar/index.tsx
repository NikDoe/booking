import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const SideBar = () => {
	return (
		<div className={styles.Container}>
			<Link to="">пользователи</Link>
			<Link to="trains">поезда</Link>
			<Link to="flights">самолёты</Link>
			<Link to="hotels">отели</Link>
		</div>
	);
};

export default SideBar;

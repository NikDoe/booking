import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<Link to="/">на главную</Link>
		</footer>
	);
};

export default Footer;

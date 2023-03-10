import { Outlet } from "react-router-dom";
import Header from "../Header";

import styles from "./layout.module.css";

const Layout = () => {
	return (
		<div className={styles.Container}>
			<Header />
			<main className={styles.Main}>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
};
export default Layout;

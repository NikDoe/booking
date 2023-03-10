import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import styles from "./layout.module.css";

const Layout = () => {
	return (
		<div className={styles.Container}>
			<Header />
			<main className={styles.Main}>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Outlet />
				</Suspense>
			</main>
			<footer></footer>
		</div>
	);
};
export default Layout;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { ToastContainer } from "react-toastify";

import styles from "./styles.module.css";

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
			<ToastContainer />
		</div>
	);
};
export default Layout;

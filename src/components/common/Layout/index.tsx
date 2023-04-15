import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import styles from "./styles.module.css";
import { Footer, Header } from "components";

const MAIN_REGEX = /^\/(\/)?$/;

const Layout = () => {
	const { pathname } = useLocation();

	let footer = null;
	if (!MAIN_REGEX.test(pathname)) {
		footer = <Footer />;
	}

	return (
		<div className={styles.Container}>
			<Header />
			<main className={styles.Main}>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Outlet />
				</Suspense>
			</main>
			{footer}
			<ToastContainer />
		</div>
	);
};
export default Layout;

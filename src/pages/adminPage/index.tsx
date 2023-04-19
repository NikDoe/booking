import { useTitle } from "hooks";

import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import { SideBar } from "components";

const AdminPage = () => {
	useTitle("админ-панель");

	return (
		<div className={styles.Container}>
			<SideBar />
			<Outlet />
		</div>
	);
};

export default AdminPage;

import { Link } from "react-router-dom";
import { logout, logouthUrlEndpoint } from "api/authApi";
import { HTTPError } from "ky";
import { toast } from "react-toastify";
import { toastConfig } from "config";
import { useSWRConfig } from "swr";
import { useAuthToken } from "hooks";

import styles from "./styles.module.css";

const Logout = () => {
	const { mutate } = useSWRConfig();
	const { setToken } = useAuthToken();

	const handleLogout = async () => {
		try {
			const response = await mutate(logouthUrlEndpoint, logout);
			localStorage.removeItem("auth");
			setToken(null);
			toast.success(response?.message, toastConfig);
		} catch (error) {
			if (error instanceof HTTPError) {
				const errorResponse = await error.response.json();
				toast.error(errorResponse.error);
			}
		}
	};
	return (
		<Link className={styles.Logout} to="/" onClick={handleLogout}>
			выйти
		</Link>
	);
};

export default Logout;

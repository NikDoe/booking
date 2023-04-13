import { useAuth, useTitle } from "hooks";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const ProfilePage = () => {
	useTitle("Личный кабинет");

	const { username, email, roles } = useAuth();

	const usersRoles = roles.map((role) => (
		<div className={styles.Role} key={role.id}>
			{role.value}
		</div>
	));

	return (
		<div className={styles.Container}>
			<h1>личный кабинет</h1>
			<p>имя : {username}</p>
			<p>email : {email}</p>
			<div>роли : {usersRoles}</div>
			<Link to="/">на главную</Link>
		</div>
	);
};

export default ProfilePage;

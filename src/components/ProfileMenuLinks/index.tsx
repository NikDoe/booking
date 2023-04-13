import { CustomNavLink, Logout } from "components";
import { useAuth } from "hooks";

const ProfileMenuLinks = () => {
	const { avatar, isAdmin } = useAuth();

	return (
		<>
			{isAdmin && <CustomNavLink to="admin">админ панель</CustomNavLink>}
			{avatar && (
				<>
					<Logout />
				</>
			)}
			{!avatar && (
				<>
					<CustomNavLink to="login">Войти</CustomNavLink>
					<CustomNavLink to="signup">Регистрация</CustomNavLink>
				</>
			)}
		</>
	);
};

export default ProfileMenuLinks;

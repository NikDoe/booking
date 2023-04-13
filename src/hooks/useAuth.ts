import jwtDecode from "jwt-decode";
import { IUser, Role } from "types";
import useAuthToken from "./useAuthToken";

const useAuth = () => {
	const { token } = useAuthToken();

	let isAdmin = false;

	if (token) {
		const { username, avatar, email, roles } = jwtDecode<IUser>(token);

		isAdmin = roles.map((role) => role.value).includes(Role.Admin);

		return { username, avatar, email, roles, isAdmin };
	}

	return { username: "", avatar: "", email: "", roles: [], isAdmin };
};

export default useAuth;

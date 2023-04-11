import jwtDecode from "jwt-decode";
import { Role } from "types";
import useAuthToken from "./useAuthToken";

type UserRoles = {
	value: string;
	description: string;
};

interface IDecodedUser {
	id: number;
	username: string;
	avatar: string;
	email: string;
	roles: UserRoles[];
}

const useAuth = () => {
	const { token } = useAuthToken();

	let isAdmin = false;

	if (token) {
		const { username, avatar, email, roles } =
			jwtDecode<IDecodedUser>(token);

		isAdmin = roles.map((role) => role.value).includes(Role.Admin);

		return { username, avatar, email, roles, isAdmin };
	}

	return { username: "", avatar: "", email: "", roles: [], isAdmin };
};

export default useAuth;

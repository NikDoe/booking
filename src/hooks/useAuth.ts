import { ILoginResponse, loginUrlEndpoint } from "api";
import jwtDecode from "jwt-decode";
import useSWR from "swr";
import { Role } from "types";

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
	const { data } = useSWR<ILoginResponse>(loginUrlEndpoint);

	let isAdmin = false;

	if (data?.token) {
		const { username, avatar, email, roles } = jwtDecode<IDecodedUser>(
			data.token,
		);

		isAdmin = roles.map((role) => role.value).includes(Role.Admin);

		return { username, avatar, email, roles, isAdmin };
	}

	return { username: "", avatar: "", email: "", roles: [], isAdmin };
};

export default useAuth;

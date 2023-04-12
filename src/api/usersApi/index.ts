import { api } from "api/configApi";
import { useRefreshWhenForbidden } from "hooks";
import useAuthToken from "hooks/useAuthToken";
import useSWR from "swr";

interface IUserRole {
	value: string;
	description: string;
}

interface IUser {
	id: number;
	username: string;
	avatar: string;
	email: string;
	roles: IUserRole[];
}

interface IUsersResponse {
	message?: string;
	data?: IUser[];
	error: string;
}

export const useGetUsers = () => {
	const { token } = useAuthToken();

	const { refresh } = useRefreshWhenForbidden();

	const { data: users, error } = useSWR<IUsersResponse>("users", async () => {
		return await api
			.get("users", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				hooks: {
					afterResponse: [refresh],
				},
			})
			.json();
	});

	return { users: users?.data, error };
};

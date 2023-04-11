import { api } from "api/configApi";
import { useRefreshWhenForbidden } from "hooks";
import useAuthToken from "hooks/useAuthToken";
import useSWR from "swr";

interface IUsersResponse {
	message?: string;
	data?: { username: string }[];
	error: string;
}

export const useUsers = () => {
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

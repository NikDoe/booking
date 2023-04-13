import { api } from "api/configApi";
import { useRefreshWhenForbidden } from "hooks";
import useAuthToken from "hooks/useAuthToken";
import useSWR from "swr";
import { IUsersResponse } from "types";

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

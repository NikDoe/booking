import { api } from "api/configApi";
import useAuthToken from "hooks/useAuthToken";
import { AfterResponseHook } from "ky";

const useRefreshWhenForbidden = () => {
	const { setToken } = useAuthToken();

	const hook: AfterResponseHook = async (request, options, response) => {
		if (response.status === 403) {
			const { token } = await api
				.get("auth/refresh")
				.json<{ token: string }>();
			setToken(token);

			request.headers.set("Authorization", `Bearer ${token}`);

			return api(request);
		}
	};

	return { refresh: hook };
};

export default useRefreshWhenForbidden;

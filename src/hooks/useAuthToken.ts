import { AuthContext } from "context/AuthProvider";
import { useContext } from "react";

type UseAuthTokenType = {
	token: string | null;
	setToken: (token: string) => void;
};

const useAuthToken = (): UseAuthTokenType => {
	const {
		state: { token },
		setToken,
	} = useContext(AuthContext);

	return { token, setToken };
};

export default useAuthToken;

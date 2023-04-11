import useAuthToken from "hooks/useAuthToken";
import ky from "ky";

export const api = ky.create({
	prefixUrl: "http://localhost:9000",
	credentials: "include",
});

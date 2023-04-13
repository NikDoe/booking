import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import {
	AdminPage,
	Flight,
	Flights,
	Hotel,
	Hotels,
	Login,
	ProfilePage,
	Public,
	SignUp,
	Train,
	Trains,
} from "./pages";
import { useAuthToken } from "./hooks";
import { useSWRConfig } from "swr";
import { getNewAccessToken, refreshUrlEndpoint } from "api/authApi";

function App() {
	const { token, setToken } = useAuthToken();
	const { mutate } = useSWRConfig();

	if (!token && localStorage.getItem("auth")) {
		mutate(refreshUrlEndpoint, getNewAccessToken).then((token) => {
			if (token) setToken(token);
		});
	}

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Public />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="admin" element={<AdminPage />} />
				<Route path="profile" element={<ProfilePage />} />
				<Route path="flights">
					<Route index element={<Flights />} />
					<Route path=":id" element={<Flight />} />
				</Route>
				<Route path="trains">
					<Route index element={<Trains />} />
					<Route path=":id" element={<Train />} />
				</Route>
				<Route path="hotels">
					<Route index element={<Hotels />} />
					<Route path=":id" element={<Hotel />} />
				</Route>
				<Route path="*" element={<h1>страница не существует</h1>} />
			</Route>
		</Routes>
	);
}

export default App;

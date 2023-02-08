import { Route, Routes } from "react-router-dom";
import { Layout } from "./common";
import { AdminPage, Flights, Hotels, Public, Trains } from "./pages";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Public />} />
				<Route path="flights">
					<Route index element={<Flights />} />
				</Route>
				<Route path="trains">
					<Route index element={<Trains />} />
				</Route>
				<Route path="hotels">
					<Route index element={<Hotels />} />
				</Route>
				<Route path="admin">
					<Route index element={<AdminPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;

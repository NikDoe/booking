import useTitle from "./hooks/useTitle";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";

function App() {
	useTitle("Бронирование билетов | номеров онлайн");

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Public />} />
			</Route>
		</Routes>
	);
}

export default App;

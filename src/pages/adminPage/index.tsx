import { useTitle } from "hooks";
import { Link } from "react-router-dom";

const AdminPage = () => {
	useTitle("админ-панель");

	return (
		<>
			<div>админка</div>
			<Link to="/">на главную</Link>
		</>
	);
};

export default AdminPage;

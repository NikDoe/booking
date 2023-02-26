import { FormEvent, ChangeEvent, useState } from "react";
import { Button } from "webli-ui";
import { Input } from "../../common";

import styles from "./login.module.css";

const LoginPage = () => {
	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
	});

	const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<main className={styles.Container}>
			<form className={styles.Form} onSubmit={onLoginSubmit}>
				<div>
					<Input
						value={formValues.username}
						placeholder="username"
						type="text"
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFormValues({
								...formValues,
								username: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<Input
						value={formValues.password}
						placeholder="password"
						type="password"
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFormValues({
								...formValues,
								password: e.target.value,
							})
						}
					/>
				</div>
				<Button onClick={() => alert("вы вошли")}>login</Button>
			</form>
		</main>
	);
};

export default LoginPage;

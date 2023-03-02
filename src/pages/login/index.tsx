import { FormEvent, ChangeEvent, useState } from "react";
import { Button } from "webli-ui";
import { Input } from "../../common";

import styles from "./login.module.css";

interface IFormErors {
	uError: string | null;
	pError: string | null;
}

const validateUsername = (value: string): string | null => {
	if (!value) return "обязательное поле";
	return null;
};

const validatePassword = (value: string): string | null => {
	if (!value) return "обязательное поле";
	return null;
};

const loginFormValidateShema = {
	username: validateUsername,
	password: validatePassword,
};

const validateLoginForm = (
	name: keyof typeof loginFormValidateShema,
	value: string,
) => {
	return loginFormValidateShema[name](value);
};

const LoginPage = () => {
	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
	});

	const [formErrors, setFormErors] = useState<IFormErors>({
		uError: "",
		pError: "",
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
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const username = e.target.value;
							setFormValues({
								...formValues,
								username,
							});

							const error = validateLoginForm(
								"username",
								username,
							);
							setFormErors({ ...formErrors, uError: error });
						}}
						{...(!!formErrors.uError && {
							isError: !!formErrors.uError,
							validationText: formErrors.uError,
						})}
					/>
				</div>
				<div>
					<Input
						value={formValues.password}
						placeholder="password"
						type="password"
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const password = e.target.value;
							setFormValues({
								...formValues,
								password,
							});

							const error = validateLoginForm(
								"password",
								password,
							);
							setFormErors({ ...formErrors, pError: error });
						}}
						{...(!!formErrors.pError && {
							isError: !!formErrors.pError,
							validationText: formErrors.pError,
						})}
					/>
				</div>
				<Button onClick={() => alert("вы вошли")}>login</Button>
			</form>
		</main>
	);
};

export default LoginPage;

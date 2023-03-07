import { FormEvent, ChangeEvent, useState, FocusEvent } from "react";
import { Button, FormField } from "webli-ui";

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

	const [isFocused, setIsFocused] = useState({
		userName: false,
		password: false,
	});

	const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: true });
	};

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setIsFocused({ ...isFocused, [e.target.name]: true });
		} else {
			setIsFocused({ ...isFocused, [e.target.name]: false });
		}
	};

	return (
		<main className={styles.Container}>
			<form className={styles.Form} onSubmit={onLoginSubmit}>
				<div>
					<FormField
						value={formValues.username}
						label="login"
						type="text"
						name="userName"
						isFocused={isFocused.userName}
						isRequired={true}
						onFocus={handleFocus}
						onBlur={handleBlur}
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
							error: formErrors.uError,
						})}
					/>
				</div>
				<div>
					<FormField
						value={formValues.password}
						label="password"
						type="password"
						name="password"
						isFocused={isFocused.password}
						isRequired={true}
						onFocus={handleFocus}
						onBlur={handleBlur}
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
							error: formErrors.pError,
						})}
					/>
				</div>
				<Button onClick={() => alert("вы вошли")}>login</Button>
			</form>
		</main>
	);
};

export default LoginPage;

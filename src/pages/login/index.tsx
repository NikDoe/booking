import { FormEvent, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CheckBox, FormField } from "webli-ui";
import { useHandleFocus } from "hooks";

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

const LoginPage = () => {
	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
		isMyComputer: false,
	});

	const [formErrors, setFormErors] = useState<IFormErors>({
		uError: "",
		pError: "",
	});

	const { handleBlur, handleFocus, isFocused } = useHandleFocus({
		userName: false,
		password: false,
	});

	const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("вы вошли");
	};

	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		const username = e.target.value;
		setFormValues({
			...formValues,
			username,
		});

		const error = validateUsername(username);
		setFormErors({ ...formErrors, uError: error });
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		const password = e.target.value;
		setFormValues({
			...formValues,
			password,
		});

		const error = validatePassword(password);
		setFormErors({ ...formErrors, pError: error });
	};

	const handleIsMyComputer = (e: ChangeEvent<HTMLInputElement>) => {
		const isMyComputer = e.target.checked;
		setFormValues({ ...formValues, isMyComputer });
	};

	return (
		<form className={styles.Form} onSubmit={onLoginSubmit}>
			<FormField
				value={formValues.username}
				label="username"
				type="text"
				name="userName"
				isFocused={isFocused.userName}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleUsername}
				{...(!!formErrors.uError && {
					error: formErrors.uError,
				})}
			/>
			<FormField
				value={formValues.password}
				label="password"
				type="password"
				name="password"
				isFocused={isFocused.password}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handlePassword}
				{...(!!formErrors.pError && {
					error: formErrors.pError,
				})}
			/>
			<CheckBox
				id="1"
				label="запомнить вход"
				isChecked={formValues.isMyComputer}
				onChange={handleIsMyComputer}
			/>
			<Button>login</Button>

			<Link className={styles.Signup} to="/signup">
				sign up
			</Link>
		</form>
	);
};

export default LoginPage;

import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import { Link } from "react-router-dom";
import { Button, FormField } from "webli-ui";
import { useHandleFocus } from "hooks";
import { useSWRConfig } from "swr";

import styles from "./style.module.css";
import { addNewUser, registerUrlEndpoint } from "api/authApi";

interface IFormErors {
	usernameError: string | undefined;
	emailError: string | undefined;
	passwordError: string | undefined;
	confirmError: string | undefined;
}

const validateField = (value: string): string | undefined => {
	if (!value) return "обязательное поле";
};

const SingUp = () => {
	const { mutate } = useSWRConfig();

	const [formValues, setFormValues] = useState({
		username: "",
		email: "",
		password: "",
		confirm: "",
	});

	const [formErrors, setFormErors] = useState<IFormErors>({
		usernameError: "",
		emailError: "",
		passwordError: "",
		confirmError: "",
	});

	const { isFocused, handleBlur, handleFocus } = useHandleFocus({
		userName: false,
		email: false,
		password: false,
		confirm: false,
	});

	const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
		const username = e.target.value;
		setFormValues({
			...formValues,
			username,
		});

		const error = validateField(username);
		setFormErors({ ...formErrors, usernameError: error });
	};

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
		const email = e.target.value;
		setFormValues({
			...formValues,
			email,
		});

		const error = validateField(email);
		setFormErors({ ...formErrors, emailError: error });
	};

	const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
		const password = e.target.value;
		setFormValues({
			...formValues,
			password,
		});

		const error = validateField(password);
		setFormErors({ ...formErrors, passwordError: error });
	};

	const handleConfirm = (e: ChangeEvent<HTMLInputElement>) => {
		const confirm = e.target.value;
		setFormValues({
			...formValues,
			confirm,
		});

		const error = validateField(confirm);
		setFormErors({ ...formErrors, confirmError: error });
	};

	const onSignupSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (
			!formErrors.usernameError &&
			!formErrors.emailError &&
			!formErrors.passwordError &&
			!formErrors.confirmError
		) {
			const { username, password, email } = formValues;
			const response = await mutate(
				registerUrlEndpoint,
				addNewUser({ username, password, email }),
			);
		}
	};

	const handleErrorMessage = (
		message: string | undefined,
	): string | undefined => {
		if (message) return message;

		if (formValues.password !== formValues.confirm)
			return "пароли не совпадают";
	};

	return (
		<form className={styles.Form} onSubmit={onSignupSubmit}>
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
				error={formErrors.usernameError}
			/>
			<FormField
				value={formValues.email}
				label="email"
				type="text"
				name="email"
				isFocused={isFocused.email}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleEmail}
				error={formErrors.emailError}
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
				error={handleErrorMessage(formErrors.passwordError)}
			/>
			<FormField
				value={formValues.confirm}
				label="confirm password"
				type="password"
				name="confirm"
				isFocused={isFocused.confirm}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleConfirm}
				error={handleErrorMessage(formErrors.confirmError)}
			/>
			<Button>sign up</Button>

			<Link className={styles.Login} to="/login">
				log in
			</Link>
		</form>
	);
};

export default SingUp;

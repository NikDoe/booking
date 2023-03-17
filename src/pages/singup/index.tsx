import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Button, FormField } from "webli-ui";
import { useHandleFocus } from "hooks";

import styles from "./style.module.css";

interface IFormErors {
	uError: string | undefined;
	pError: string | undefined;
	r_pError: string | undefined;
}

const validateUsername = (value: string): string | undefined => {
	if (!value) return "обязательное поле";
};

const validatePassword = (value: string): string | undefined => {
	if (!value) return "обязательное поле";
};

const SingUp = () => {
	const [formValues, setFormValues] = useState({
		username: "",
		password: "",
		repeat_password: "",
	});

	const [formErrors, setFormErors] = useState<IFormErors>({
		uError: "",
		pError: "",
		r_pError: "",
	});

	const { isFocused, handleBlur, handleFocus } = useHandleFocus({
		userName: false,
		password: false,
		repeat_password: false,
	});

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
			[e.target.name]: password,
		});

		const error = validatePassword(password);
		setFormErors({ ...formErrors, pError: error });
	};

	const handleConfirm = (e: ChangeEvent<HTMLInputElement>) => {
		const repeat_password = e.target.value;
		setFormValues({
			...formValues,
			repeat_password,
		});

		const error = validatePassword(repeat_password);
		setFormErors({ ...formErrors, r_pError: error });
	};

	const onSignupSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("вы зарегистрированы");
	};

	const handleErrorMessage = (
		message: string | undefined,
	): string | undefined => {
		if (message) return message;

		if (formValues.password !== formValues.repeat_password)
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
				error={formErrors.uError}
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
				error={handleErrorMessage(formErrors.pError)}
			/>
			<FormField
				value={formValues.repeat_password}
				label="confirm password"
				type="password"
				name="repeat_password"
				isFocused={isFocused.repeat_password}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={handleConfirm}
				error={handleErrorMessage(formErrors.r_pError)}
			/>
			<Button>sign up</Button>

			<Link className={styles.Login} to="/login">
				log in
			</Link>
		</form>
	);
};

export default SingUp;

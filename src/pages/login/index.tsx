import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CheckBox, FormField } from "webli-ui";
import { useHandleFocus } from "hooks";
import { useForm } from "react-hook-form";
import {
	EMAIL_REGEX,
	ILoginFormValues,
	ILoginResponse,
	loginUrlEndpoint,
	loginUser,
} from "api";
import { useSWRConfig } from "swr";
import { HTTPError } from "ky";
import { toast, ToastContainer } from "react-toastify";
import { toastConfig } from "config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./login.module.css";

const schema = yup.object().shape({
	email: yup
		.string()
		.required("Обязательное поле")
		.matches(EMAIL_REGEX, "Неверный формат записи email"),
	password: yup.string().required("Обязательное поле"),
});

const LoginPage = () => {
	const { handleBlur, handleFocus, isFocused } = useHandleFocus({
		email: false,
		password: false,
	});

	const { mutate } = useSWRConfig();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<ILoginFormValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			const response = await mutate(loginUrlEndpoint, loginUser(data));

			reset();

			toast.success(response?.message, toastConfig);
		} catch (error) {
			if (error instanceof HTTPError) {
				const errorResponse: Pick<ILoginResponse, "error"> =
					await error.response.json();
				const errorMessage = errorResponse.error?.split(",")[0];
				toast.error(errorMessage, toastConfig);
			}
		}
	});

	const [isChecked, setIsChecked] = useState(false);

	const handleIsMyComputer = (e: ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};

	return (
		<form className={styles.Form} onSubmit={onSubmit}>
			<FormField
				register={register}
				label="email"
				type="text"
				name="email"
				isFocused={isFocused.email}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				error={errors.email?.message}
			/>
			<FormField
				register={register}
				label="пароль"
				type="password"
				name="password"
				isFocused={isFocused.password}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				error={errors.password?.message}
			/>
			<CheckBox
				name="isMyComputer"
				id="1"
				label="запомнить вход"
				isChecked={isChecked}
				onChange={handleIsMyComputer}
			/>
			<Button type="submit">Войти</Button>
			<ToastContainer />

			<p className={styles.Text}>Нет аккаунта?</p>
			<Link className={styles.Signup} to="/signup">
				Регистрация
			</Link>
		</form>
	);
};

export default LoginPage;

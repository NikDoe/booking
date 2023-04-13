import { Link } from "react-router-dom";
import { Button, FormField } from "webli-ui";
import { useHandleFocus } from "hooks";
import { useSWRConfig } from "swr";
import {
	addNewUser,
	EMAIL_REGEX,
	ISignupFormValues,
	ISignupResponse,
	registerUrlEndpoint,
} from "api";
import { useForm } from "react-hook-form";
import { HTTPError } from "ky";
import { toast } from "react-toastify";
import { toastConfig } from "config";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./styles.module.css";

const schema = yup.object().shape({
	username: yup
		.string()
		.required("Обязательное поле")
		.min(2, "Минимальная длинна 2 символа")
		.max(20, "Максимальная длинна 20 символов")
		.matches(/^([^0-9]*)$/, "Имя не должно содержать цифры"),
	email: yup
		.string()
		.required("Обязательное поле")
		.matches(EMAIL_REGEX, "Неверный формат записи email"),
	password: yup
		.string()
		.required("Обязательное поле")
		.min(6, "Минимальная длинна 6 символов"),
	confirm: yup
		.string()
		.required("Обязательное поле")
		.min(6, "Минимальная длинна 6 символов")
		.oneOf([yup.ref("password")], "Пароли не сопадают"),
});

const SingUp = () => {
	const { isFocused, handleBlur, handleFocus } = useHandleFocus({
		username: false,
		email: false,
		password: false,
		confirm: false,
	});

	const { mutate } = useSWRConfig();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<ISignupFormValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			const response = await mutate(
				registerUrlEndpoint,
				addNewUser(data),
			);

			reset();

			toast.success(response?.message, toastConfig);
		} catch (error) {
			if (error instanceof HTTPError) {
				const errorResponse: Pick<ISignupResponse, "error"> =
					await error.response.json();
				const errorMessage = errorResponse.error?.split(",")[0];
				toast.error(errorMessage, toastConfig);
			}
		}
	});

	return (
		<form className={styles.Form} onSubmit={onSubmit}>
			<FormField
				register={register}
				label="имя пользователя"
				type="text"
				name="username"
				isFocused={isFocused.username}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				error={errors.username?.message}
			/>
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
			<FormField
				register={register}
				label="подтвердите пароль"
				type="password"
				name="confirm"
				isFocused={isFocused.confirm}
				isRequired={true}
				onFocus={handleFocus}
				onBlur={handleBlur}
				error={errors.confirm?.message}
			/>
			<Button type="submit">Регистрация</Button>

			<p className={styles.Text}>Уже зарегистрированы?</p>
			<Link className={styles.Login} to="/login">
				Войти здесь
			</Link>
		</form>
	);
};

export default SingUp;

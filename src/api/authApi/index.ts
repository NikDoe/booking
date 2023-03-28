import { api } from "api/configApi";
import { HTTPError } from "ky";

export interface ISignupForm {
	username: string;
	email: string;
	password: string;
}

export interface IUserResponse {
	id: number;
	username: string;
	email: string;
}

export interface ISignupResponse {
	message?: string;
	data?: IUserResponse;
	error?: string;
}

export const registerUrlEndpoint = "users/register";

export const addNewUser = async ({
	username,
	password,
	email,
}: ISignupForm): Promise<ISignupResponse> => {
	try {
		return await api
			.post(registerUrlEndpoint, {
				json: { username, password, email },
			})
			.json<ISignupResponse>();
	} catch (error) {
		const defaultError = "Упс, что-то пошло не так";

		if (error instanceof HTTPError) {
			return await error.response.json();
		}

		return { error: defaultError };
	}
};

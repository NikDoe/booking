import { api } from "api/configApi";

export const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export interface ISignupFormValues {
	username: string;
	email: string;
	password: string;
	confirm: string;
}

export interface IUser {
	id: number;
	username: string;
	email: string;
}

export interface ISignupResponse {
	message?: string;
	data?: IUser;
	error?: string;
}

export const registerUrlEndpoint = "users/register";

export const addNewUser = async (
	data: ISignupFormValues,
): Promise<ISignupResponse> => {
	return await api
		.post(registerUrlEndpoint, {
			json: data,
		})
		.json<ISignupResponse>();
};

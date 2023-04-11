import { api } from "api/configApi";

export const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export interface ISignupFormValues {
	username: string;
	email: string;
	password: string;
	confirm: string;
}

export interface ILoginFormValues {
	email: string;
	password: string;
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

export interface ILoginResponse {
	message?: string;
	token?: string;
	error?: string;
}

export const registerUrlEndpoint = "auth/registration";
export const loginUrlEndpoint = "auth/login";
export const refreshUrlEndpoint = "auth/refresh";
export const logouthUrlEndpoint = "auth/logout";

export const addNewUser = async (
	data: ISignupFormValues,
): Promise<ISignupResponse> => {
	return await api
		.post(registerUrlEndpoint, {
			json: data,
		})
		.json<ISignupResponse>();
};

export const loginUser = async (
	data: ILoginFormValues,
): Promise<ILoginResponse> => {
	return await api
		.post(loginUrlEndpoint, { json: data })
		.json<ILoginResponse>();
};

export const getNewAccessToken = async (): Promise<string> => {
	const { token } = await api
		.get(refreshUrlEndpoint)
		.json<{ token: string }>();
	return token;
};

export const logout = async (): Promise<{ message: string }> => {
	return await api.post(logouthUrlEndpoint).json<{ message: string }>();
};

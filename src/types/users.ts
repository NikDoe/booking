export enum Role {
	User = "user",
	Admin = "admin",
}

export interface IUserRole {
	id: number;
	value: string;
	description: string;
}

export interface IUser {
	id: number;
	username: string;
	avatar: string;
	email: string;
	roles: IUserRole[];
}

export interface IUsersResponse {
	message?: string;
	data?: IUser[];
	error: string;
}

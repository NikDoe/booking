import { ReactNode } from "react";

export interface ISingleProps {
	id: number | string;
	to: string;
}

export interface IWrapperProps {
	children: ReactNode;
}

export enum Role {
	User = "user",
	Admin = "admin",
}

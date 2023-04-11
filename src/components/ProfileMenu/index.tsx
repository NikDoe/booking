import { FC, useEffect, useRef, useState } from "react";
import { Avatar, DropDown } from "webli-ui";
import { CustomNavLink } from "components";
import { useAuth, useAuthToken } from "hooks";
import { useSWRConfig } from "swr";
import { logout, logouthUrlEndpoint } from "api/authApi";
import { HTTPError } from "ky";
import { toast } from "react-toastify";
import { toastConfig } from "config";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const ProfileMenu: FC = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const refToggleDropDown = useRef<HTMLDivElement>(null);

	const { avatar, isAdmin } = useAuth();
	const { mutate } = useSWRConfig();
	const { setToken } = useAuthToken();

	useEffect(() => {
		window.addEventListener("click", handleClickOutsideDropDown);
		return () => {
			window.removeEventListener("click", handleClickOutsideDropDown);
		};
	});

	const handleClickOutsideDropDown = (event: MouseEvent) => {
		if (isDropDownOpen) {
			if (
				refToggleDropDown.current &&
				event.target instanceof HTMLElement
			) {
				if (!refToggleDropDown.current.contains(event.target)) {
					setIsDropDownOpen(false);
				}
			}
		}
	};

	const handleToggleDropDown = () => {
		setIsDropDownOpen((prevState) => !prevState);
	};

	const handleLogout = async () => {
		try {
			const response = await mutate(logouthUrlEndpoint, logout);
			localStorage.removeItem("auth");
			setToken(null);
			toast.success(response?.message, toastConfig);
		} catch (error) {
			if (error instanceof HTTPError) {
				const errorResponse = await error.response.json();
				toast.error(errorResponse.error);
			}
		}
	};

	return (
		<div className={styles.Main} ref={refToggleDropDown}>
			<Avatar onClick={handleToggleDropDown} title={avatar} />
			<DropDown isOpen={isDropDownOpen} className={styles.Dropdown}>
				{isAdmin && (
					<CustomNavLink to="admin">админ панель</CustomNavLink>
				)}
				{!avatar && (
					<>
						<CustomNavLink to="login">Войти</CustomNavLink>
						<CustomNavLink to="signup">Регистрация</CustomNavLink>
					</>
				)}
				{avatar && (
					<>
						<Link
							className={styles.Logout}
							to="/"
							onClick={handleLogout}
						>
							выйти
						</Link>
					</>
				)}
			</DropDown>
		</div>
	);
};

export default ProfileMenu;

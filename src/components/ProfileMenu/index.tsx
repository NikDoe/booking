import { FC, useEffect, useRef, useState } from "react";
import { Avatar, DropDown } from "webli-ui";
import { CustomNavLink } from "components";

import styles from "./styles.module.css";
import { useAuth } from "hooks";

const ProfileMenu: FC = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const refToggleDropDown = useRef<HTMLDivElement>(null);

	const { avatar, isAdmin } = useAuth();

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
						<CustomNavLink to="/">выйти</CustomNavLink>
					</>
				)}
			</DropDown>
		</div>
	);
};

export default ProfileMenu;

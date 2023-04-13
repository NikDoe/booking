import { FC, useEffect, useRef, useState } from "react";
import { Avatar, DropDown } from "webli-ui";
import { useAuth } from "hooks";
import { ProfileMenuLinks } from "components";

import styles from "./styles.module.css";

const ProfileMenu: FC = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const refToggleDropDown = useRef<HTMLDivElement>(null);

	const { avatar } = useAuth();

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
				<ProfileMenuLinks />
			</DropDown>
		</div>
	);
};

export default ProfileMenu;

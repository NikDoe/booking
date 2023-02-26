import { FC, HTMLProps } from "react";

import styles from "./input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
	isError?: boolean;
	validationText?: string;
}

const Input: FC<InputProps> = ({
	isError = false,
	validationText,
	...props
}) => {
	const classnames = isError
		? `${styles.Input} ${styles.Input__Error}`
		: `${styles.Input}`;
	return (
		<>
			<input className={classnames} {...props} />
			{isError && validationText && <p>{validationText}</p>}
		</>
	);
};

export default Input;

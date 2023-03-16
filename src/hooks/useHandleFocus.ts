import { useState, FocusEvent } from "react";

const useHandleFocus = <T>(focusedNames: T) => {
	const [isFocused, setIsFocused] = useState(focusedNames);

	const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused({ ...isFocused, [e.target.name]: true });
	};

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setIsFocused({ ...isFocused, [e.target.name]: true });
		} else {
			setIsFocused({ ...isFocused, [e.target.name]: false });
		}
	};

	return { handleFocus, handleBlur, isFocused };
};

export default useHandleFocus;

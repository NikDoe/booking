import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
